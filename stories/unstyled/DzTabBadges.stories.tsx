import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzTabsBadges,
  DzTabsBadgesProps,
} from '../../src/unstyled/DzTabsBadges';
import { tabs } from '../../constants/mocks/unstyled/DzTabsBadges';

const meta: Meta = {
  title: 'Unstyled/Navigation/Tabs/DzTabsBadges',
  component: DzTabsBadges,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTabsBadgesProps> = args => <DzTabsBadges {...args} />;

export const PrimaryDzTabsBadges = Template.bind({});
PrimaryDzTabsBadges.args = { tabs };
