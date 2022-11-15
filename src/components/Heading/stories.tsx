import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Qualquer coisa',
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
    darkFont: true,
  },
};

Dark.args = {
  darkFont: false,
};
