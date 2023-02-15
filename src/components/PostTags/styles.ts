import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} auto;
    max-width: ${theme.sizes.content};
    padding: 0 ${theme.spacings.large};

    span {
      margin: 0 0 0 0.5rem;
    }

    span::before{
      content: ' ';
    }

    span:last-child::after {
      content: '';
    }

    a {
      transition: all 300ms ease-in-out;
      text-decoration: none;


      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
