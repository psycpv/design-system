import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzPill,
  DzPillProps,
  PILL_VARIANTS,
  PILL_VARIANT_NAMES,
} from '../../src/atoms/DzPill';

const meta: Meta = {
  title: 'Atoms/Helpers/DzPill',
  component: DzPill,
  argTypes: {
    variant: {
      control: 'select',
      options: PILL_VARIANT_NAMES,
      defaultValue: PILL_VARIANTS.ARTIST,
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

export const ArtistPill = Template.bind({});
ArtistPill.args = {};

export const DesktopPill = Template.bind({});
DesktopPill.args = {variant: PILL_VARIANTS.DESKTOP};

export const MobilePill = Template.bind({});
MobilePill.args = {variant: PILL_VARIANTS.MOBILE};

export const FilterPill = Template.bind({});
FilterPill.args = {variant: PILL_VARIANTS.FILTER};