import { useState, useEffect } from 'react';
import { PostGrid } from 'components/PostGrid';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import { BaseTemplate } from 'templates/Base';
import * as Styled from './styles';

export type PostsTemplateProps = {
  setting: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ setting, posts = [] }: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState([]);
  const limit = 1;
  let start = 0;

  const handleLoadMorePosts = () => {
    const post = posts.filter((post, i) => {
      if (i >= start && i < limit) {
        start = start + limit;
        return post;
      }
    });
    setStatePosts([...statePosts, post]);
  };

  return (
    <BaseTemplate setting={setting}>
      <PostGrid posts={statePosts} />
      <Styled.ButtonContainer>
        <Styled.Button onClick={handleLoadMorePosts}>
          Carregar mais
        </Styled.Button>
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
