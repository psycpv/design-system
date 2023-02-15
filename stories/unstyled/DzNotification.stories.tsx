import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzNotification , DzNotificationProps} from '../../src/unstyled/DzNotification';

const meta: Meta = {
  title: 'Unstyled/Overlays/Notifications/DzNotification',
  component: DzNotification,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzNotificationProps> = args => <DzNotification {...args}/>

export const PrimaryDzNotification = Template.bind({});
PrimaryDzNotification.args = { };