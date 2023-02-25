import {
  defaultLoadPostsVariables,
  FullStrapy,
  loadPosts,
} from 'api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function TagPage({ posts, setting, variables }: FullStrapy) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Caregando ...</h1>;
  }

  const tagName = posts[0].tags.filter(
    (tag) => tag.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          tag: {tagName} - {setting.blogName}
        </title>
        <meta
          name="description"
          content={`Visualizando o conteúdo contendo a tag: ${tagName}`}
        />

        <link
          rel="canonical"
          href={`https://blog.eleomardorneles.com.br/tag/${tagName}`}
        />
        <meta name="author" content="Eleomar Dorneles" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:site_name"
          content={`tag: ${tagName} - ${setting.blogName}`}
        />
        <meta
          property="og:title"
          content={`tag: ${tagName} - ${setting.blogName}`}
        />
        <meta
          property="og:description"
          content={`Visualizando o conteúdo contendo a tag: ${tagName}`}
        />
        <meta property="og:image" content={setting.logo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:url"
          content={`https://blog.eleomardorneles.com.br/tag/${tagName}`}
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

  const variables = { tagSlug: ctx.params.slug as string };

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
        ...variables,
        ...defaultLoadPostsVariables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
