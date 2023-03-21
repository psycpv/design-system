import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzLabel, DzLabelProps } from '../../src/atoms/DzLabel';

const meta: Meta = {
  title: 'Atoms/Helpers/DzLabel',
  component: DzLabel,
  argTypes: {
    title: { type: 'string', defaultValue: 'Label' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzLabelProps> = args => <DzLabel {...args} />;

export const PrimaryDzLabel = Template.bind({});
PrimaryDzLabel.args = {};
