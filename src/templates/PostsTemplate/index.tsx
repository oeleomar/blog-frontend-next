import React, { useState } from 'react';
import { PostGrid } from 'components/PostGrid';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import { BaseTemplate } from 'templates/Base';
import * as Styled from './styles';
import { loadPosts, LoadPostVariables } from 'api/load-posts';

export type PostsTemplateProps = {
  setting: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostVariables;
};

export const PostsTemplate = ({
  setting,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }
    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate setting={setting}>
      <PostGrid posts={statePosts} />
      {statePosts && statePosts.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            disabled={buttonDisabled}
            onClick={handleLoadMorePosts}
          >
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
