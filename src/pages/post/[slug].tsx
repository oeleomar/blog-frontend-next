import { FullStrapy, loadPosts } from 'api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostTemplate } from 'templates/PostTemplate';

export default function PostPage({ posts, setting }: FullStrapy) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Caregando ...</h1>;
  }

  return (
    <>
      <Head>
        <title>
          {posts[0].title} - {setting.blogName}
        </title>
        <meta name="description" content={posts[0].excerpt} />
        <link
          rel="canonical"
          href={`https://blog.eleomardorneles.com.br/post/${posts[0].slug}`}
        />
        <meta name="author" content="Eleomar Dorneles" />
        <meta name="robots" content="index, follow" />

        <meta property="og:site_name" content={posts[0].title} />
        <meta property="og:title" content={posts[0].title} />
        <meta property="og:description" content={posts[0].excerpt} />
        <meta property="og:image" content={posts[0].cover.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:url"
          content={`https://blog.eleomardorneles.com.br/post/${posts[0].slug}`}
        />
      </Head>
      <PostTemplate post={posts[0]} setting={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: FullStrapy | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post) => ({ params: { slug: post.slug } }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<FullStrapy> = async (ctx) => {
  let data: FullStrapy | null = null;

  try {
    data = await loadPosts({
      postSlug: ctx.params.slug as string,
    });
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
