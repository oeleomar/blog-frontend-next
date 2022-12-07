import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`

    ${Heading} {
      margin: 0;
      margin-top: calc(${theme.spacings.small} - 0.6rem);
      margin-bottom: ${theme.spacings.small};
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all .3s ease-in-out;
    }

    &:hover a{
      color: ${theme.colors.secondary};
    }
    &:hover img{
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  ${() => css`
    max-width: 100%;
    transition: opacity .3s ease-in-out;
  `}
`;

export const Excerpt = styled.p``;
