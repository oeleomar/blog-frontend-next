import { request } from 'graphql-request';
import * as GRAPHQL_QUERY from 'graphql/queries';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import config from '../config/index';

export type LoadPostVariables = {
  categorySlug?: string;
  postSlug?: string;
  authorSlug?: string;
  tagSlug?: string;
};

export type FullStrapy = { setting: SettingsStrapi; posts: PostStrapi[] };

export const loadPosts = async (variables: LoadPostVariables = {}) => {
  let data: FullStrapy | null;

  try {
    if (variables.postSlug) {
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_SLUG,
        {
          ...variables,
        },
      );
      const posts = formatPosts(data);
      const setting = formatSettings(data);
      return { posts, setting };
    } else if (variables.authorSlug) {
      console.log('Entrei no author');
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_AUTHOR,
        {
          ...variables,
        },
      );
      console.log(data);
      const posts = formatPosts(data);
      const setting = formatSettings(data);
      return { posts, setting };
    } else {
      data = await request(
        config.graphQlUrl,
        GRAPHQL_QUERY.GRAPHQL_QUERY_POSTS,
        {
          ...variables,
        },
      );
      const posts = formatPosts(data);
      const setting = formatSettings(data);
      return { posts, setting };
    }
  } catch (e) {
    console.log(e);
  }
};

export function formatPosts(data: any) {
  const posts = data.posts.data.map((val) => {
    const {
      id,
      attributes: {
        title = '',
        slug = '',
        excerpt = '',
        content = '',
        allowComments = true,
        categories = [],
        tags = [],
        author = {},
        cover = {},
        createdAt = '',
      },
    } = val;
    return {
      id,
      allowComments,
      title,
      slug,
      excerpt,
      content,
      createdAt,
      categories:
        categories.data.length > 0
          ? categories.data.map((val: any) => {
              return {
                id: val.id,
                displayName: val.attributes.displayName,
                slug: val.attributes.slug,
              };
            })
          : [],
      tags:
        tags.data.length > 0
          ? tags.data.map((val: any) => {
              return {
                id: val.id,
                displayName: val.attributes.displayName,
                slug: val.attributes.slug,
              };
            })
          : [],
      author: author.data
        ? {
            id: author.data.id,
            displayName: author.data.attributes.displayName,
            slug: author.data.attributes.slug,
          }
        : {},
      cover: cover.data
        ? {
            id: cover.data.id,
            name: cover.data.attributes.name,
            alternativeText: cover.data.attributes.alternativeText,
            url: cover.data.attributes.url,
          }
        : {},
    };
  });

  return posts;
  /*  */
}

function formatSettings(data: any) {
  const {
    logo = {},
    blogDescription = '',
    blogName = '',
    menuLink = [],
    text = '',
  } = data.setting.data.attributes;

  const setting = {
    id: data.setting.data.id,
    blogDescription,
    blogName,
    logo: {
      id: logo.data.id,
      name: logo.data.attributes.name,
      alternativeText: logo.data.attributes.alternativeText,
      url: logo.data.attributes.url,
    },
    menuLink,
    text,
  };

  return { ...setting };
}
