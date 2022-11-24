import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (menuVisible, theme) => {};

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
    overflow-y: auto;
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;


  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};
    }

    img {
      border: 0.5rem solid ${theme.colors.secondary}
    }
  `}
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    top: ${theme.spacings.medium};
    left: 26rem;
  `}
`;
