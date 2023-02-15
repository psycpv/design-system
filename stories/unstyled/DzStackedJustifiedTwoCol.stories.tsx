import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzStackedJustifiedTwoCol,
  DzStackedJustifiedTwoColProps,
} from '../../src/unstyled/DzStackedJustifiedTwoCol';
import { positions } from '../../constants/mocks/unstyled/DzStackedJustifiedTwoCol';

const meta: Meta = {
  title: 'Unstyled/Lists/StackedLists/DzStackedJustifiedTwoCol',
  component: DzStackedJustifiedTwoCol,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzStackedJustifiedTwoColProps> = args => (
  <DzStackedJustifiedTwoCol {...args} />
);

export const PrimaryDzStackedJustifiedTwoCol = Template.bind({});
PrimaryDzStackedJustifiedTwoCol.args = { positions };
