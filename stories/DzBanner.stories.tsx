import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzBanner,
  DzBannerProps,
  BANNER_VARIANT_NAMES,
  BANNER_TYPES_NAMES,
  ALERT_VARIANT_NAMES,
} from '../src/atoms/DzBanner';

const meta: Meta = {
  title: 'Atoms/Helpers/DzBanner',
  component: DzBanner,
  argTypes: {
    title: { type: 'string', defaultValue: 'Message Title' },
    subtitle: {
      type: 'string',
      defaultValue:
        'This is placeholder text. Ut sodales nunc vitae est lacinia, nec tempus risus aliquam. Vestibulum sollicitudin eget tellus ac venenatis. ',
    },
    variant: { control: 'select', options: BANNER_VARIANT_NAMES },
    type: { control: 'select', options: BANNER_TYPES_NAMES },
    alertType: { control: 'select', options: ALERT_VARIANT_NAMES },
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
