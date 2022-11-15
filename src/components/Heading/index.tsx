import * as styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  darkFont?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large' | 'huge';
  uppercase?: boolean;
};

export const Heading = ({
  children,
  darkFont = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <styled.Title as={as} darkFont={darkFont} size={size} uppercase={uppercase}>
      {children}
    </styled.Title>
  );
};
