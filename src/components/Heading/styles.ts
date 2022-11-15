import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

export const Title = styled.div<
  Pick<HeadingProps, 'uppercase' | 'size' | 'darkFont'>
>`
  font-size: 20px;
  font-weight: 900;
  ${({ theme, darkFont, size, uppercase }) => css`
    color: ${darkFont ? theme.colors.primary : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const titleSize = {
  small: (theme: DefaultTheme) => css`
    ${theme.font.sizes.text_2xl}
  `,
  medium: (theme: DefaultTheme) => css`
    ${theme.font.sizes.text_3xl}
  `,
  large: (theme: DefaultTheme) => css`
    ${theme.font.sizes.text_4xl}
  `,
  huge: (theme: DefaultTheme) => css`
    ${theme.font.sizes.text_5xl}
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.text_lg};
  }
`;
