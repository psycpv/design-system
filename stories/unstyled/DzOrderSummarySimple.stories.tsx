import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzOrderSummarySimple , DzOrderSummarySimpleProps} from '../../src/unstyled/DzOrderSummarySimple';
import { products } from '../../constants/mocks/unstyled/DzOrderSummarySimple';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzOrderSummarySimple',
  component: DzOrderSummarySimple,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzOrderSummarySimpleProps> = args => <DzOrderSummarySimple {...args}/>

export const PrimaryDzOrderSummarySimple = Template.bind({});
PrimaryDzOrderSummarySimple.args = {products };