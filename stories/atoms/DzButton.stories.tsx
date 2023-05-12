import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzButton,
  DzButtonProps,
  BUTTON_VARIANT_NAMES,
  BUTTON_SIZE_NAMES,
  BUTTON_SIZES,
} from '../../src/atoms/DzButton';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/Button',
  component: DzButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: 'select', options: BUTTON_VARIANT_NAMES },
    size: { control: 'select', options: BUTTON_SIZE_NAMES },
    children: { type: 'string', defaultValue: 'Button' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzButtonProps> = args => <DzButton {...args} />;

export const PrimaryButtonSmall = Template.bind({});
PrimaryButtonSmall.args = { variant: BUTTON_VARIANT_NAMES[0]};

export const PrimaryButtonLarge = Template.bind({});
PrimaryButtonLarge.args = { variant: BUTTON_VARIANT_NAMES[0], size: BUTTON_SIZES.LARGE };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { variant: BUTTON_VARIANT_NAMES[1], size: BUTTON_SIZES.LARGE };

export const TertiaryButton = Template.bind({});
TertiaryButton.args = { variant: BUTTON_VARIANT_NAMES[2] };
