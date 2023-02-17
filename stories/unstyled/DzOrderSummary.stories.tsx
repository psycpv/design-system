import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzOrderSummary,
  DzOrderSummaryProps,
} from '../../src/unstyled/DzOrderSummary';
import { products } from '../../constants/mocks/unstyled/DzOrderSummary';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzOrderSummary',
  component: DzOrderSummary,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzOrderSummaryProps> = args => (
  <DzOrderSummary {...args} />
);

export const PrimaryDzOrderSummary = Template.bind({});
PrimaryDzOrderSummary.args = { products };
