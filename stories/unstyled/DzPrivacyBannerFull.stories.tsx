import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzPrivacyBannerFull,
  DzPrivacyBannerFullProps,
} from '../../src/unstyled/DzPrivacyBannerFull';

const meta: Meta = {
  title: 'Unstyled/Marketing/DzPrivacyBannerFull',
  component: DzPrivacyBannerFull,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPrivacyBannerFullProps> = args => (
  <DzPrivacyBannerFull {...args} />
);

export const PrimaryDzPrivacyBannerFull = Template.bind({});
PrimaryDzPrivacyBannerFull.args = {};
