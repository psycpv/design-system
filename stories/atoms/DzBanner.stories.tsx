import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzBanner,
  DzBannerProps,
  TYPES,
  MESSAGE_VARIANTS,
  ALERT_VARIANT,
  TOAST_VARIANT,
  BANNER_VARIANT_NAMES,
  BANNER_TYPES_NAMES,
  ALERT_VARIANT_NAMES,
  TOAST_VARIANT_NAMES,
} from '../../src/atoms/DzBanner';
import { alertTitle } from '../../constants/mocks/DzBanners';

const meta: Meta = {
  title: 'Atoms/Helpers/DzBanner',
  component: DzBanner,
  argTypes: {
    type: {
      control: 'select',
      options: BANNER_TYPES_NAMES,
      defaultValue: TYPES.MESSAGE,
    },
    messageVariant: {
      control: 'select',
      options: BANNER_VARIANT_NAMES,
      defaultValue: MESSAGE_VARIANTS.SUCCESS,
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
      defaultValue: alertTitle,
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

export const MessageBanner = Template.bind({});
MessageBanner.args = {};

export const AlertBanner = Template.bind({});
AlertBanner.args = {
  type: TYPES.ALERT,
  title: alertTitle,
  alertVariation: ALERT_VARIANT.DARK,
};

export const Toast = Template.bind({});
Toast.args = {
  type: TYPES.TOAST,
  title: 'Message Title',
  subtitle: '',
  showInfoIcon: true,
  toastVariant:TOAST_VARIANT.ERROR,
  link: '/',
  linkText: 'Undo',
};
