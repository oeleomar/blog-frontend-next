import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { theme } from 'styles/theme';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': 'font-size: 3rem',
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading darkFont={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
});
