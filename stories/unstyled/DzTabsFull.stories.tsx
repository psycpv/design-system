import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzTabsFull, DzTabsFullProps } from '../../src/unstyled/DzTabsFull';
import { tabs } from '../../constants/mocks/unstyled/DzTabs';

const meta: Meta = {
  title: 'Unstyled/Navigation/Tabs/DzTabsFull',
  component: DzTabsFull,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTabsFullProps> = args => <DzTabsFull {...args} />;

export const PrimaryDzTabsFull = Template.bind({});
PrimaryDzTabsFull.args = { tabs };
