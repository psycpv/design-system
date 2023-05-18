import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzRange, RangeProps } from '../../src/atoms/DzRange';

const meta: Meta = {
  title: 'Atoms/Helpers/DzRange',
  component: DzRange,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<RangeProps> = args => <DzRange {...args} />;

export const PrimaryDzRange = Template.bind({});
PrimaryDzRange.args = {
  min: 0,
  max: 4,
  step: 1,
};
