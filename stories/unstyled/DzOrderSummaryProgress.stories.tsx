import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzOrderSummaryProgress,
  DzOrderSummaryProgressProps,
} from '../../src/unstyled/DzOrderSummaryProgress';
import { products } from '../../constants/mocks/unstyled/DzOrderSummaryProgress';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzOrderSummaryProgress',
  component: DzOrderSummaryProgress,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzOrderSummaryProgressProps> = args => (
  <DzOrderSummaryProgress {...args} />
);

export const PrimaryDzOrderSummaryProgress = Template.bind({});
PrimaryDzOrderSummaryProgress.args = { products };
