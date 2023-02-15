import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzNotificationAvatar,
  DzNotificationAvatarProps,
} from '../../src/unstyled/DzNotificationAvatar';

const meta: Meta = {
  title: 'Unstyled/Overlays/Notifications/DzNotificationAvatar',
  component: DzNotificationAvatar,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzNotificationAvatarProps> = args => (
  <DzNotificationAvatar {...args} />
);

export const PrimaryDzNotificationAvatar = Template.bind({});
PrimaryDzNotificationAvatar.args = {};
