import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzSplit,
  DzSplitProps,
  SPLIT_TYPES,
  SPLIT_TYPES_NAMES,
} from '../../src/molecules/DzSplit/DzSplit';
import { split } from '../../constants/mocks/DzSplit';

const meta: Meta = {
  title: 'Molecules/Content/DzSplit',
  component: DzSplit,
  argTypes: {
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

export const DzSplitTall = Template.bind({});
DzSplitTall.args = { type: SPLIT_TYPES.TALL, data: split };

export const DzSplitShort = Template.bind({});
DzSplitShort.args = { type: SPLIT_TYPES.SHORT, data: split };

export const DzSplitShortReverse = Template.bind({});
DzSplitShortReverse.args = {
  type: SPLIT_TYPES.SHORT,
  reverse: true,
  data: split,
};

export const DzSplitTallReverse = Template.bind({});
DzSplitTallReverse.args = {
  type: SPLIT_TYPES.TALL,
  reverse: true,
  data: split,
};

export const DzSplitTallAnimated = Template.bind({});
DzSplitTallAnimated.args = {
  type: SPLIT_TYPES.TALL,
  reverse: true,
  animate: true,
  data: split,
};
