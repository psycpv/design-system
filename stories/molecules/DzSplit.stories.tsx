import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzSplit, DzSplitProps, SPLIT_TYPES, SPLIT_TYPES_NAMES } from '../../src/molecules/DzSplit/DzSplit';
import { split } from '../../constants/mocks/DzSplit';

const meta: Meta = {
  title: 'Molecules/Content/DzSplit',
  component: DzSplit,
  argTypes:{
    type: { control: 'select', options: SPLIT_TYPES_NAMES },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzSplitProps> = args => <DzSplit {...args} />;

export const PrimaryDzSplit = Template.bind({});
PrimaryDzSplit.args = { type: SPLIT_TYPES.TALL, data: split };
