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
        <meta name="description" content={posts[0].excerpt} />
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
