import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DzRadioButton, RadioProps } from '../../src/atoms/DzRadioButton';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/RadioButton',
  component: DzRadioButton,
  argTypes: {
    title: { type: 'string', defaultValue: 'RadioButton Title' },
    subtitle: { type: 'string', defaultValue: 'RadioButton Subtitle' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<RadioProps> = args => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <DzRadioButton
      onChange={e => {
        setIsChecked(e.target.checked);
      }}
      {...args}
      checked={isChecked}
    />
  );
};

export const PrimaryRadioButton = Template.bind({});
