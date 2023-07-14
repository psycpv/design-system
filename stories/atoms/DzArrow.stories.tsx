import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzArrow, DzArrowProps, ArrowMode } from '../../src/atoms/DzArrow';

const meta: Meta = {
  title: 'Atoms/Helpers/Arrow',
  component: DzArrow,
  argTypes: {
    onClick: { action: 'clicked' },
    className: { control: { type: null } },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzArrowProps> = args => <DzArrow {...args} />;

export const FillArrow = Template.bind({});
FillArrow.args = { mode: ArrowMode.FILL };

export const OutlineArrow = Template.bind({});
OutlineArrow.args = { mode: ArrowMode.OUTLINE };
