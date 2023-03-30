import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzInterstitial,
  DzInterstitialProps,
} from '../../src/molecules/DzInterstitial/DzInterstitial';
import { interstitial } from '../../constants/mocks/DzInterstitial';

const meta: Meta = {
  title: 'Molecules/Content/DzInterstitial',
  component: DzInterstitial,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzInterstitialProps> = args => (
  <DzInterstitial {...args} />
);

export const FullWidthInterstitial = Template.bind({});
FullWidthInterstitial.args = { data: { ...interstitial, split: false } };

export const SplitInterstitial = Template.bind({});
SplitInterstitial.args = { data: interstitial };


