import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzSelect, DzSelectProps } from '../../src/atoms/DzSelect';
import { options } from '../../constants/mocks/DzSelect';

const meta: Meta = {
  title: 'Atoms/Inputs & Selections/Select',
  component: DzSelect,
  argTypes: {
    title: { type: 'string', defaultValue: 'Title' },
    subtitle: { type: 'string', defaultValue: 'Subtitle' },
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

const Template: Story<DzSelectProps> = args => <DzSelect {...args} />;

export const PrimaryDzSelect = Template.bind({});
PrimaryDzSelect.args = { options };
