import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzPillsTabs, DzPillsTabsProps } from '../../src/unstyled/DzPillsTabs';
import { tabs } from '../../constants/mocks/unstyled/DzPillsTabs';

const meta: Meta = {
  title: 'Unstyled/Navigation/Tabs/DzPillsTabs',
  component: DzPillsTabs,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPillsTabsProps> = args => <DzPillsTabs {...args} />;

export const PrimaryDzPillsTabs = Template.bind({});
PrimaryDzPillsTabs.args = { tabs };
