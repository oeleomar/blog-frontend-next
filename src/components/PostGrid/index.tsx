import { PostCard, PostCardProps } from 'components/PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts?: PostCardProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {!posts.length && (
        <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
      )}

      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={`p1-${post.id}`} {...post} />)}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
