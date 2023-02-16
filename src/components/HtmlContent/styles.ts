import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    iframe[src*='ads'] {
      display: none;
    }

    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 1.5;

    p {
      margin: ${theme.spacings.medium} 0;
    }

    a, a:visited, a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all .3s ease-in-out;
    }

    a:hover {
      filter: brightness(50%)
    }
/*
    code {
      background: ${theme.colors.mediumGray};
      color: ${theme.colors.secondary};
      font-family: monospace;
      font-size: ${theme.font.sizes.small};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.mediumGray};
      border-radius: 5px;
      color: ${theme.colors.primary};
      font-family: monospace;
      font-size: ${theme.font.sizes.small};
      margin: ${theme.spacings.medium} 0;
      overflow-x: auto;
      padding: ${theme.spacings.medium};
      width: 100%;
    }

    pre code {
      color: inherit;
      background: inherit;
    } */

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium} 0;
    }

    hr {
      border: none;
      border-bottom: 1px solid ${theme.colors.mediumGray};
    }

    ul, ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};

    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }


    table {
        width: 100%;
        border-collapse: collapse;
        margin: ${theme.spacings.medium} 0;
    }

    table td, table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        float: none;
        max-width: 100%;
        margin: 0;
      }
    }

  `}
`;
