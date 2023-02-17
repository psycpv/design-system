import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzPrivacyBanner,
  DzPrivacyBannerProps,
} from '../../src/unstyled/DzPrivacyBanner';

const meta: Meta = {
  title: 'Unstyled/Marketing/DzPrivacyBanner',
  component: DzPrivacyBanner,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPrivacyBannerProps> = args => (
  <DzPrivacyBanner {...args} />
);

export const PrimaryDzPrivacyBanner = Template.bind({});
PrimaryDzPrivacyBanner.args = {};
