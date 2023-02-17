import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzIncentives,
  DzIncentivesProps,
} from '../../src/unstyled/DzIncentives';
import { incentives } from '../../constants/mocks/unstyled/DzIncentives';

const meta: Meta = {
  title: 'Unstyled/Ecommerce/DzIncentives',
  component: DzIncentives,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzIncentivesProps> = args => <DzIncentives {...args} />;

export const PrimaryDzIncentives = Template.bind({});
PrimaryDzIncentives.args = { incentives };
