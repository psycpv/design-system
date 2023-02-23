import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzBar,
  DzBarProps,
  VARIANTS,
  BAR_VARIANT_NAMES,
} from '../src/atoms/DzBar';

const meta: Meta = {
  title: 'Atoms/Helpers/DzBar',
  component: DzBar,
  argTypes: {
    variant: {
      control: 'select',
      options: BAR_VARIANT_NAMES,
      defaultValue: VARIANTS.PROGRESS,
    },
    valueProgress: {
      type: 'number',
      defaultValue: 50,
    },
    onChangeRange: { action: 'range event' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzBarProps> = args => <DzBar {...args} />;

export const PrimaryDzBar = Template.bind({});
PrimaryDzBar.args = {};
