import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
} as Meta<HeaderProps>;

export const Template: Story<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
