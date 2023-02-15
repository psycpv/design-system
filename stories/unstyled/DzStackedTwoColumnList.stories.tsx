import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzStackedTwoColumnList,
  DzStackedTwoColumnListProps,
} from '../../src/unstyled/DzStackedTwoColumnList';
import { applications } from '../../constants/mocks/unstyled/DzStackedTwoColumnList';

const meta: Meta = {
  title: 'Unstyled/Lists/StackedLists/DzStackedTwoColumnList',
  component: DzStackedTwoColumnList,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzStackedTwoColumnListProps> = args => (
  <DzStackedTwoColumnList {...args} />
);

export const PrimaryDzStackedTwoColumnList = Template.bind({});
PrimaryDzStackedTwoColumnList.args = { applications };
