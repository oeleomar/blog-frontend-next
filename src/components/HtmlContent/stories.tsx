import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    children: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Obcaecati sed tempore quibusdam vitae sequi deserunt dolor eius,
    beatae earum corporis ipsam consequuntur molestias dignissimos
    asperiores adipisci voluptatem, id est minus!`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
