import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzToggleTitle,
  DzToggleTitleProps,
} from '../../src/unstyled/DzToggleTitle';

const meta: Meta = {
  title: 'Unstyled/ApplicationUI/DzToggleTitle',
  component: DzToggleTitle,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzToggleTitleProps> = args => <DzToggleTitle {...args} />;

export const PrimaryDzToggleTitle = Template.bind({});
PrimaryDzToggleTitle.args = {};
