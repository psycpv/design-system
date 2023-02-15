import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzStackedNarrowList,
  DzStackedNarrowListProps,
} from '../../src/unstyled/DzStackedNarrowList';
import { people } from '../../constants/mocks/unstyled/DzStackedNarrowList';

const meta: Meta = {
  title: 'Unstyled/Lists/StackedLists/DzStackedNarrowList',
  component: DzStackedNarrowList,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzStackedNarrowListProps> = args => (
  <DzStackedNarrowList {...args} />
);

export const PrimaryDzStackedNarrowList = Template.bind({});
PrimaryDzStackedNarrowList.args = { people };
