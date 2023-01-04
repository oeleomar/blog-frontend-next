import { request } from 'graphql-request';
import { GRAPHQL_QUERY } from 'graphql/queries';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import config from '../config/index';

export type LoadPostVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type FullStrapy = { setting: SettingsStrapi; posts: PostStrapi[] };

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<FullStrapy> => {
  const defaultVariables: LoadPostVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };
  const data = await request(config.graphQlUrl, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });
  console.log(data);

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
