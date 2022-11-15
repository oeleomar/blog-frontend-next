import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinksProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({
  children,
  link,
  newTab = false,
}: MenuLinksProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link}>
        <Styled.Container href={link} target={target}>
          {children}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
