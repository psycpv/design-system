import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzArrow,
  DzArrowProps,
  ARROW_MODES,
  ARROW_MODES_NAMES,
  ARROW_DIRECTIONS,
  ARROW_DIRECTIONS_NAMES,
} from '../../src/atoms/DzArrow';

const meta: Meta = {
  title: 'Atoms/Helpers/Arrow',
  component: DzArrow,
  argTypes: {
    onClick: { action: 'clicked' },
    mode: { control: 'select', options: ARROW_MODES_NAMES },
    className: { control: { type: null } },
    direction: {
      control: 'select',
      options: ARROW_DIRECTIONS_NAMES,
      defaultValue: ARROW_DIRECTIONS.RIGHT,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzArrowProps> = args => <DzArrow {...args} />;

export const LightBackgroundArrow = Template.bind({});
LightBackgroundArrow.args = { mode: ARROW_MODES.LIGHT_BACKGROUND };

export const DarkBackgroundArrow = Template.bind({});
DarkBackgroundArrow.args = { mode: ARROW_MODES.DARK_BACKGROUND };

