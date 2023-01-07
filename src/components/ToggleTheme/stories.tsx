import { Meta, Story } from '@storybook/react/types-6-0';
import { ToggleTheme, ToggleThemeProps } from '.';

export default {
  title: 'ToggleTheme',
  component: ToggleTheme,
} as Meta<ToggleThemeProps>;

export const Template: Story<ToggleThemeProps> = (args) => {
  return (
    <div>
      <ToggleTheme {...args} />
    </div>
  );
};
