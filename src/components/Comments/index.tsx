import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="blog-eleomardorneles"
        config={{
          url: `https://blog.eleomardorneles.com.br/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
