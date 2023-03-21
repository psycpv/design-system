import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzCheckbox, CheckProps } from '../../src/atoms/DzCheckbox';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/Checkbox',
  component: DzCheckbox,
  argTypes: {
    onChange: { action: 'checked' },
    title: { type: 'string', defaultValue: 'Checkbox Title' },
    subtitle: { type: 'string', defaultValue: 'Checkbox Subtitle' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<CheckProps> = args => <DzCheckbox {...args}/>

export const PrimaryCheckbox = Template.bind({});
