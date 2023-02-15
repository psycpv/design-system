import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzNotificationActions,
  DzNotificationActionsProps,
} from '../../src/unstyled/DzNotificationActions';

const meta: Meta = {
  title: 'Unstyled/Overlays/Notifications/DzNotificationActions',
  component: DzNotificationActions,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzNotificationActionsProps> = args => (
  <DzNotificationActions {...args} />
);

export const PrimaryDzNotificationActions = Template.bind({});
PrimaryDzNotificationActions.args = {};
