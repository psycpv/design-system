import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzNavSimpleSearch,
  DzNavSimpleSearchProps,
} from '../../src/unstyled/DzNavSimpleSearch';
import {
  user,
  navigation,
  userNavigation,
} from '../../constants/mocks/unstyled/DzNavSimpleSearch';

const meta: Meta = {
  title: 'Unstyled/Navigation/NavBars/DzNavSimpleSearch',
  component: DzNavSimpleSearch,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzNavSimpleSearchProps> = args => (
  <DzNavSimpleSearch {...args} />
);

export const PrimaryDzNavSimpleSearch = Template.bind({});
PrimaryDzNavSimpleSearch.args = { user, navigation, userNavigation };
