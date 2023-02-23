import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzPill,
  DzPillProps,
  VARIANTS,
  PILL_VARIANT_NAMES,
} from '../src/atoms/DzPill';

const meta: Meta = {
  title: 'Atoms/Helpers/DzPill',
  component: DzPill,
  argTypes: {
    variant: {
      control: 'select',
      options: PILL_VARIANT_NAMES,
      defaultValue: VARIANTS.ARTIST,
    },
    title: { type: 'string', defaultValue: 'Pill Title' },
    onClickClose: { action: 'close clicked' },
    onClickPill: { action: 'Pill clicked' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPillProps> = args => <DzPill {...args} />;

export const PrimaryDzPill = Template.bind({});
PrimaryDzPill.args = {};
