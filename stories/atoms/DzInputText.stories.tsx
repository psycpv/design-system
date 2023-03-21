import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzInputText, InputTextProps } from '../../src/atoms/DzInputText';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/InputText',
  component: DzInputText,
  argTypes: {
    onChange: { action: 'changed' },
    title: { type: 'string', defaultValue: 'Input Title' },
    subtitle: { type: 'string', defaultValue: 'Input Subtitle' },
    placeholdertext: { type: 'string', defaultValue: 'Input Placeholder' },
    errorMsg: {
      type: 'string',
      defaultValue: 'Input Value Error Message/Reason',
    },
    validator: { control: { type: null } }
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<InputTextProps> = (args) => <DzInputText {...args} />;

export const PrimaryInputText = Template.bind({});
