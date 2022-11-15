import { Meta, Story } from '@storybook/react/types-6-0';
import { theme } from 'styles/theme';
import { MenuLink, MenuLinksProps } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    default: 'dark',
  },
} as Meta;

export const Template: Story<MenuLinksProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
        maxWidth: '320px',
        padding: theme.spacings.medium,
      }}
    >
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
