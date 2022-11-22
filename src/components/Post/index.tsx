import { ArticleHeader, ArticleHeaderProps } from 'components/ArticleHeader';
import { HtmlContent } from 'components/HtmlContent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        author={author}
        categories={categories}
        title={title}
        excerpt={excerpt}
        id={id}
        cover={cover}
        createdAt={createdAt}
      />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
