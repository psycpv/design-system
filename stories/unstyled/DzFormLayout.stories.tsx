import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzFormLayout,
  DzFormLayoutProps,
} from '../../src/unstyled/DzFormLayout';

const meta: Meta = {
  title: 'Unstyled/Forms/DzFormLayout',
  component: DzFormLayout,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzFormLayoutProps> = args => <DzFormLayout {...args} />;

export const PrimaryDzFormLayout = Template.bind({});
PrimaryDzFormLayout.args = {};
