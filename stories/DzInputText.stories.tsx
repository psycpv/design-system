import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzInputText, InputTextProps } from '../src/atoms/DzInputText';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/InputText',
  component: DzInputText,
  argTypes: {
    OnChange: { action: 'changed' },
    title: { type: 'string', defaultValue: 'Input Title' },
    subtitle: { type: 'string', defaultValue: 'Input Subtitle' },
    placeholderText: { type: 'string', defaultValue: 'Input Placeholder' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputTextProps> = args => <DzInputText {...args}/>

export const PrimaryInputText = Template.bind({});
