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

export const MessageBannerDefault = Template.bind({});
MessageBannerDefault.args = { messageVariant: MESSAGE_VARIANTS.DEFAULT };

export const MessageBannerSuccess = Template.bind({});
MessageBannerSuccess.args = { messageVariant: MESSAGE_VARIANTS.SUCCESS };

export const MessageBannerAlert = Template.bind({});
MessageBannerAlert.args = { messageVariant: MESSAGE_VARIANTS.ALERT };

export const MessageBannerWarning = Template.bind({});
MessageBannerWarning.args = { messageVariant: MESSAGE_VARIANTS.WARNING };

export const MessageBannerError = Template.bind({});
MessageBannerError.args = { messageVariant: MESSAGE_VARIANTS.ERROR };

export const AlertBannerDefaultLight = Template.bind({});
AlertBannerDefaultLight.args = {
  type: TYPES.ALERT,
  title: alertTitle,
  alertVariation: ALERT_VARIANT.DEFAULT,
};

export const AlertBannerDefaultDark = Template.bind({});
AlertBannerDefaultDark.args = {
  type: TYPES.ALERT,
  title: alertTitle,
  alertVariation: ALERT_VARIANT.DARK,
};

export const AlertBannerSuccess = Template.bind({});
AlertBannerSuccess.args = {
  type: TYPES.ALERT,
  title: alertTitle,
  alertVariation: ALERT_VARIANT.SUCCESS,
};

export const AlertBannerError = Template.bind({});
AlertBannerError.args = {
  type: TYPES.ALERT,
  title: alertTitle,
  alertVariation: ALERT_VARIANT.ERROR,
};

export const ToastMessageOrAlert = Template.bind({});
ToastMessageOrAlert.args = {
  type: TYPES.TOAST,
  title: 'Message Title',
  subtitle: '',
  showInfoIcon: true,
  toastVariant: TOAST_VARIANT.DARK,
  link: '/',
  linkText: 'Undo',
};

export const ToastMessageWithExtraText = Template.bind({});
ToastMessageWithExtraText.args = {
  type: TYPES.TOAST,
  title: 'Message Title',
  subtitle: 'This is a placeholder text.',
  toastVariant: TOAST_VARIANT.DARK,
  link: '/',
  linkText: 'Undo',
};

export const ToastSuccess = Template.bind({});
ToastSuccess.args = {
  type: TYPES.TOAST,
  title: 'Success Title',
  subtitle: '',
  showInfoIcon: true,
  toastVariant: TOAST_VARIANT.SUCCESS,
  link: '/',
  linkText: 'Undo',
};

export const ToastError = Template.bind({});
ToastError.args = {
  type: TYPES.TOAST,
  title: 'Error Title',
  subtitle: '',
  showInfoIcon: true,
  toastVariant: TOAST_VARIANT.ERROR,
  link: '/',
  linkText: 'Undo',
};
