import * as Styled from './styles';

export type ArticleMetaProps = {
  title?: string;
};

export const ArticleMeta = ({ title }: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
