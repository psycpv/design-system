import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzTitle, DzTitleProps } from '../src/DzTitle';

const meta: Meta = {
  title: 'Typography',
  component: DzTitle,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzTitleProps> = args => <DzTitle {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const DefaultDzTitle = Template.bind({});

DefaultDzTitle.args = {
  titleType: 'h1',
  title: 'Hello'
};
