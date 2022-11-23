import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { LogoLink } from 'components/LogoLink';
import { MenuLink } from 'components/MenuLink';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links, blogName, logo }: MenuProps) => {
  return (
    <>
      <Styled.OpenClose href="#" aria-label="Open or close menu">
        <MenuIcon aria-label="Open Menu" />
      </Styled.OpenClose>
      <Styled.Wrapper>
        <Styled.Nave>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>
          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nave>
      </Styled.Wrapper>
    </>
  );
};
