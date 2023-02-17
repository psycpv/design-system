import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzProductOverview,
  DzProductOverviewProps,
} from '../../src/unstyled/DzProductOverview';
import { product } from '../../constants/mocks/unstyled/DzProductOverview';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzProductOverview',
  component: DzProductOverview,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzProductOverviewProps> = args => (
  <DzProductOverview {...args} />
);

export const PrimaryDzProductOverview = Template.bind({});
PrimaryDzProductOverview.args = { product };
