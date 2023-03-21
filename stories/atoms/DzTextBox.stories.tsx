import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzTextBox , DzTextBoxProps} from '../../src/atoms/DzTextBox';

const meta: Meta = {
  title: 'Atoms/Inputs & Selections/TextBox',
  component: DzTextBox,
  argTypes: {
    title: { type: 'string', defaultValue: 'Title' },
    subtitle: { type: 'string', defaultValue: 'Subtitle' },
    placeholder: { type: 'string', defaultValue: 'Example Text' },
    errorMsg: {
      type: 'string',
      defaultValue: 'Input Value Error Message/Reason',
    },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTextBoxProps> = args => <DzTextBox {...args}/>

export const PrimaryDzTextBox = Template.bind({});
PrimaryDzTextBox.args = { };