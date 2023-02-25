import {
  defaultLoadPostsVariables,
  FullStrapy,
  loadPosts,
} from 'api/load-posts';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function SearchPage({ posts, setting, variables }: FullStrapy) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.blogName}
        </title>

        <meta
          name="description"
          content={`Resultado da pesquisa: ${router.query.q}`}
        />
        <link
          rel="canonical"
          href={`https://blog.eleomardorneles.com.br/search/?q=${router.query.q}`}
        />
        <meta name="author" content="Eleomar Dorneles" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content={`Pesquisa: ${router.query.q} - ${setting.blogName}`}
        />
        <meta
          property="og:title"
          content={`Pesquisa: ${router.query.q} - ${setting.blogName}`}
        />
        <meta
          property="og:description"
          content={`Resultado da pesquisa: ${router.query.q}`}
        />
        <meta property="og:image" content={setting.logo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:url"
          content={`https://blog.eleomardorneles.com.br/search/?q=${router.query.q}`}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<FullStrapy> = async (
  ctx,
) => {
  let data: FullStrapy | null = null;
  const query = ctx.query.q || '';
  const variables = {
    postSearch: query as string,
  };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts) {
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
  };
};
