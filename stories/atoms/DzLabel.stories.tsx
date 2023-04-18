import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzLabel,
  DzLabelProps,
  LABEL_VARIANTS_NAMES,
  LABEL_VARIANTS,
} from '../../src/atoms/DzLabel';

const meta: Meta = {
  title: 'Atoms/Helpers/DzLabel',
  component: DzLabel,
  argTypes: {
    title: { type: 'string', defaultValue: 'Label' },
    variant: { control: 'select', options: LABEL_VARIANTS_NAMES },
    className: { control: { type: null } },
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

export const DarkLabel = Template.bind({});
DarkLabel.args = {};

export const GrayLabel = Template.bind({});
GrayLabel.args = { variant: LABEL_VARIANTS.GREY };
