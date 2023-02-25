import {
  defaultLoadPostsVariables,
  FullStrapy,
  loadPosts,
} from 'api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function CategoryPage({
  posts,
  setting,
  variables,
}: FullStrapy) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Caregando ...</h1>;
  }

  const categoryName = posts[0].categories.filter(
    (category) => category.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          Category: {categoryName} - {setting.blogName}
        </title>
        <meta
          name="description"
          content={`Visualizando o conteúdo contendo a categoria: ${categoryName}`}
        />

        <link
          rel="canonical"
          href={`https://blog.eleomardorneles.com.br/category/${categoryName}`}
        />
        <meta name="author" content="Eleomar Dorneles" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:site_name"
          content={`categoria: ${categoryName} - ${setting.blogName}`}
        />
        <meta
          property="og:title"
          content={`categoria: ${categoryName} - ${setting.blogName}`}
        />
        <meta
          property="og:description"
          content={`Visualizando o conteúdo contendo a categoria: ${categoryName}`}
        />
        <meta property="og:image" content={setting.logo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:url"
          content={`https://blog.eleomardorneles.com.br/category/${categoryName}`}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<FullStrapy> = async (ctx) => {
  let data: FullStrapy | null = null;
  const variables = {
    categorySlug: ctx.params.slug as string,
  };
  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
