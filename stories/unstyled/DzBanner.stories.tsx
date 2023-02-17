import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzBanner, DzBannerProps } from '../../src/unstyled/DzBanner';

const meta: Meta = {
  title: 'Unstyled/Marketing/DzBanner',
  component: DzBanner,
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
