import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.large};
    text-align: center;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    max-width: 120rem;
    gap: ${theme.spacings.large};
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    max-width: 120rem;
    padding: ${theme.spacings.large};

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;
