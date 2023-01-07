import * as Styled from './styles';

export type ToggleThemeProps = {
  title?: string;
};

export const ToggleTheme = ({ title }: ToggleThemeProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
