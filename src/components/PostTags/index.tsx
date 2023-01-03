import * as Styled from './styles';

export type PostTagsProps = {
  tags?: string;
};

export const PostTags = ({ title }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
