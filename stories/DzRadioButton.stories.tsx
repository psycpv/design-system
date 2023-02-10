import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzRadioButton, RadioProps } from '../src/atoms/DzRadioButton';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/RadioButton',
  component: DzRadioButton,
  argTypes: {
    onChange: { action: 'checked' },
    title: { type: 'string', defaultValue: 'RadioButton Title' },
    subtitle: { type: 'string', defaultValue: 'RadioButton Subtitle' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioProps> = args => <DzRadioButton {...args}/>

export const PrimaryRadioButton = Template.bind({});
