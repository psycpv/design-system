import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzGridListActions,
  DzGridListActionsProps,
} from '../../src/unstyled/DzGridListActions';
import { actions } from '../../constants/mocks/unstyled/DzGridListActions';

const meta: Meta = {
  title: 'Unstyled/Lists/Grid/DzGridListActions',
  component: DzGridListActions,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzGridListActionsProps> = args => (
  <DzGridListActions {...args} />
);

export const PrimaryDzGridListActions = Template.bind({});
PrimaryDzGridListActions.args = { actions };
