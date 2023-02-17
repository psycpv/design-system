import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzProductOverviewTabs,
  DzProductOverviewTabsProps,
} from '../../src/unstyled/DzProductOverviewTabs';
import {
  product,
  reviews,
  license,
  faqs,
} from '../../constants/mocks/unstyled/DzProductOverviewTabs';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzProductOverviewTabs',
  component: DzProductOverviewTabs,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzProductOverviewTabsProps> = args => (
  <DzProductOverviewTabs {...args} />
);

export const PrimaryDzProductOverviewTabs = Template.bind({});
PrimaryDzProductOverviewTabs.args = { product, reviews, license, faqs };
