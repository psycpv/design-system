import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzToggle, DzToggleProps } from '../../src/unstyled/DzToggle';

const meta: Meta = {
  title: 'Unstyled/ApplicationUI/DzToggle',
  component: DzToggle,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzToggleProps> = args => <DzToggle {...args} />;

export const PrimaryDzToggle = Template.bind({});
PrimaryDzToggle.args = {};
