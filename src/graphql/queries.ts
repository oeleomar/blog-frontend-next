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
  query GET_POST_BY_SLUG($postSlug: StringFilterInput) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { slug: $postSlug }) {
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
query GET_POST_BY_AUTHOR($postAuthor: AuthorFiltersInput) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { author: $postAuthor }) {
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
query GET_POST_BY_CATEGORY($postCategory: CategoryFiltersInput) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { categories: $postCategory }) {
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
query GET_POST_BY_TAG($postTag: TagFiltersInput) {
  setting {
    data {
      id
      attributes {
        ...settings
      }
    }
  }

  posts(filters: { tags: $postTag }) {
    data {
      id
      attributes {
        ...post
      }
    }
  }
}
`;
