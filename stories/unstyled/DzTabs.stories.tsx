import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzTabs, DzTabsProps } from '../../src/unstyled/DzTabs';
import { tabs } from '../../constants/mocks/unstyled/DzTabs';

const meta: Meta = {
  title: 'Unstyled/Navigation/Tabs/DzTabs',
  component: DzTabs,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTabsProps> = args => <DzTabs {...args} />;

export const PrimaryDzTabs = Template.bind({});
PrimaryDzTabs.args = { tabs };
