import {
  defaultLoadPostsVariables,
  FullStrapy,
  loadPosts,
} from 'api/load-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function Index({ posts, setting, variables }: FullStrapy) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
        <link rel="canonical" href="https://blog.eleomardorneles.com.br" />
        <meta name="author" content="Eleomar Dorneles" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content={setting.blogName} />
        <meta property="og:title" content={setting.blogName} />
        <meta property="og:description" content={setting.blogDescription} />
        <meta property="og:image" content={setting.logo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://blog.eleomardorneles.com.br" />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variables={variables} />
    </>
  );
}

export const getStaticProps: GetStaticProps<FullStrapy> = async () => {
  let data: FullStrapy = null;
  try {
    data = await loadPosts();
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
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
