import * as Styled from './styles';
import { Post } from 'components/Post';
import { PostTags } from 'components/PostTags';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import { BaseTemplate } from 'templates/Base';

export type PostTemplateProps = {
  setting: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ setting, post }: PostTemplateProps) => {
  return (
    <BaseTemplate setting={setting}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </BaseTemplate>
  );
};
