import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

export const Title = styled.h1<HeadingProps>`
  ${({ theme, darkFont, size, uppercase }) => css`
    color: ${darkFont ? theme.colors.primary : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
    line-height: 1.2;
  `}
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.large};

  `,
  large: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.huge};

  `,
  huge: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xhuge};

    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.medium};
  }
`;
