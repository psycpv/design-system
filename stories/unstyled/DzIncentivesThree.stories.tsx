import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzIncentivesThree,
  DzIncentivesThreeProps,
} from '../../src/unstyled/DzIncentivesThree';
import { incentives } from '../../constants/mocks/unstyled/DzIncentives';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzIncentivesThree',
  component: DzIncentivesThree,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzIncentivesThreeProps> = args => (
  <DzIncentivesThree {...args} />
);

export const PrimaryDzIncentivesThree = Template.bind({});
PrimaryDzIncentivesThree.args = { incentives: incentives.slice(1) };
