import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzBanner,
  DzBannerProps,
  TYPES,
  VARIANTS,
  ALERT_VARIANT,
  TOAST_VARIANT,
  BANNER_VARIANT_NAMES,
  BANNER_TYPES_NAMES,
  ALERT_VARIANT_NAMES,
  TOAST_VARIANT_NAMES,
} from '../src/atoms/DzBanner';

const meta: Meta = {
  title: 'Atoms/Helpers/DzBanner',
  component: DzBanner,
  argTypes: {
    type: {
      control: 'select',
      options: BANNER_TYPES_NAMES,
      defaultValue: TYPES.MESSAGE,
    },
    variant: {
      control: 'select',
      options: BANNER_VARIANT_NAMES,
      defaultValue: VARIANTS.DEFAULT,
    },
    alertVariation: {
      control: 'select',
      options: ALERT_VARIANT_NAMES,
      defaultValue: ALERT_VARIANT.DEFAULT,
    },
    toastVariant: {
      control: 'select',
      options: TOAST_VARIANT_NAMES,
      defaultValue: TOAST_VARIANT.DARK,
    },
    title: { type: 'string', defaultValue: 'Message Title' },
    subtitle: {
      type: 'string',
      defaultValue:
        'This is placeholder text. Ut sodales nunc vitae est lacinia, nec tempus risus aliquam. Vestibulum sollicitudin eget tellus ac venenatis. ',
    },
    linkText: { type: 'string', defaultValue: 'Undo' },
    onClickClose: { action: 'close clicked' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzBannerProps> = args => <DzBanner {...args} />;

export const PrimaryDzBanner = Template.bind({});
PrimaryDzBanner.args = {};
