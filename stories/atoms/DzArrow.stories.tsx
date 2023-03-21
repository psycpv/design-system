import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzArrow,
  DzArrowProps,
  ARROW_VARIANT_NAMES,
  ARROW_DIRECTION,
} from '../../src/atoms/DzArrow';

const meta: Meta = {
  title: 'Atoms/Helpers/Arrow',
  component: DzArrow,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: 'select', options: ARROW_VARIANT_NAMES },
    direction: { control: 'select', options: ARROW_DIRECTION, defaultValue: ARROW_DIRECTION[0] },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzArrowProps> = (args) => <DzArrow {...args} />;

export const PrimaryArrow = Template.bind({});
PrimaryArrow.args = { variant: ARROW_VARIANT_NAMES[0] };

export const SecondaryArrow = Template.bind({});
SecondaryArrow.args = { variant: ARROW_VARIANT_NAMES[1] };
