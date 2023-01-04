import { request } from 'graphql-request';
import * as GRAPHQL_QUERY from 'graphql/queries';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import config from '../config/index';

export type LoadPostVariables = {
  categorySlug?: {
    slug: {
      contains: string;
    };
  };
  postSlug?: {
    contains: string;
  };
  authorSlug?: {
    slug: {
      contains: string;
    };
  };

  tagSlug?: {
    slug: {
      contains: string;
    };
  };
  start?: number;
  limit?: number;
};

export type FullStrapy = { setting: SettingsStrapi; posts: PostStrapi[] };

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<FullStrapy> => {
  let data: FullStrapy | null;
  const defaultVariables = {
    start: 0,
    limit: 10,
  };

  try {
    if (variables.authorSlug) {
      console.log(variables.authorSlug);
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_AUTHOR,
        { ...defaultVariables, ...variables },
      );
      console.log(data, GRAPHQL_QUERY.GRAPHQL_QUERY_AUTHOR);
    } else if (variables.categorySlug) {
      console.log('categor');
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_CATEGORY,
        {
          ...defaultVariables,
          ...variables,
        },
      );
    } else if (variables.postSlug) {
      console.log(GRAPHQL_QUERY.GRAPHQL_QUERY_SLUG);
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_SLUG,
        {
          ...defaultVariables,
          ...variables,
        },
      );
    } else if (variables.tagSlug) {
      console.log('tag');
      data = await request(config.graphQlUrl, GRAPHQL_QUERY.GRAPHQL_QUERY_TAG, {
        ...variables,
      });
    } else {
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_POSTS,
        {
          ...defaultVariables,
          ...variables,
        },
      );
    }
  } catch (e) {
    console.log(e);
  }

  const formatedData = formatData(data);
  return { ...formatedData };
};

export function formatData(data: any) {
  const posts = data.posts.data.map((val) => {
    const {
      title,
      slug,
      excerpt,
      content,
      allowComments,
      categories,
      tags,
      author,
      cover,
      createdAt,
    } = val.attributes;
    return {
      allowComments,
      title,
      slug,
      excerpt,
      content,
      createdAt,
      categories: categories.data.map((val: any) => {
        return {
          id: val.id,
          displayName: val.attributes.displayName,
          slug: val.attributes.slug,
        };
      }),
      tags: tags.data.map((val: any) => {
        return {
          id: val.id,
          displayName: val.attributes.displayName,
          slug: val.attributes.slug,
        };
      }),
      author: {
        id: author.data.id,
        displayName: author.data.attributes.displayName,
        slug: author.data.attributes.slug,
      },
      cover: {
        id: cover.data.id,
        name: cover.data.attributes.name,
        alternativeText: cover.data.attributes.alternativeText,
        url: cover.data.attributes.url,
      },
    };
  });
  const {
    logo: {
      data: {
        id,
        attributes: { name, alternativeText, url },
      },
    },
    blogDescription,
    blogName,
    menuLink,
    text,
  } = data.setting.data.attributes;

  const setting = {
    id: data.setting.data.id,
    blogDescription,
    blogName,
    logo: {
      id,
      name,
      alternativeText,
      url,
    },
    menuLink,
    text,
  };
  return { setting, posts };
}
