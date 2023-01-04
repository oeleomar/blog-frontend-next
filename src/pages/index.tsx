import Head from 'next/head';
import { FullStrapy, loadPosts } from 'api/load-posts';
import { GetStaticProps } from 'next';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function Index({ posts, setting }: FullStrapy) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
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
    },
    revalidate: 24 * 60 * 60,
  };
};
