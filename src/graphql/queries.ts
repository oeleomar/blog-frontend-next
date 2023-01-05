import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY_POSTS = gql`
  ${GRAPHQL_FRAGMENTS}
  query GET_POSTS {
    setting {
      data {
        id
        attributes {
          ...settings
        }
      }
    }

    posts {
      data {
        id
        attributes {
          ...post
        }
      }
    }
  }
`;

export const GRAPHQL_QUERY_SLUG = gql`
 ${GRAPHQL_FRAGMENTS}
  query GET_POST_BY_SLUG($postSlug: String!) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { slug: { eq: $postSlug } }) {
    data {
      id
      attributes {
        ...post
      }
    }
  }
}
`;
export const GRAPHQL_QUERY_AUTHOR = gql`
 ${GRAPHQL_FRAGMENTS}
query GET_POST_BY_AUTHOR($authorSlug: String!) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { author: { slug : { eq: $authorSlug }}}) {
    data {
      id
      attributes {
        ...post
      }
    }
  }
}
`;
export const GRAPHQL_QUERY_CATEGORY = gql`
 ${GRAPHQL_FRAGMENTS}
query GET_POST_BY_CATEGORY($categorySlug: String!) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { categories: {slug: {eq: $categorySlug }} }) {
    data {
      id
      attributes {
        ...post
      }
    }
  }
}`;

export const GRAPHQL_QUERY_TAG = gql`
 ${GRAPHQL_FRAGMENTS}
query GET_POST_BY_TAG($tagSlug: String!) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { tags: {slug: {eq: $tagSlug }}}) {
    data {
      id
      attributes {
        ...post
      }
    }
  }
}
`;
