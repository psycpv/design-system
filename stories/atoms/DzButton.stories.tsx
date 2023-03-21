import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzButton, DzButtonProps, BUTTON_VARIANT_NAMES } from '../../src/atoms/DzButton';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/Button',
  component: DzButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: 'select', options: BUTTON_VARIANT_NAMES },
    children: { type: 'string', defaultValue: 'Button' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzButtonProps> = args => <DzButton {...args}/>

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { variant: BUTTON_VARIANT_NAMES[0] };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { variant: BUTTON_VARIANT_NAMES[1] };

export const TertiaryButton = Template.bind({});
TertiaryButton.args = { variant: BUTTON_VARIANT_NAMES[2] };