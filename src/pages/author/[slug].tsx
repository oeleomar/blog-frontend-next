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

  return (
    <>
      <Head>
        <title>
          {posts[0].author.displayName} - {setting.blogName}
        </title>
        <meta name="author" content="Eleomar Dorneles" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:site_name"
          content={`Autor: ${posts[0].author.displayName} - ${setting.blogName}`}
        />
        <meta
          property="og:title"
          content={`Autor: ${posts[0].author.displayName} - ${setting.blogName}`}
        />
        <meta property="og:image" content={setting.logo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
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
    authorSlug: ctx.params.slug as string,
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
