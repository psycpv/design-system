import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzTabs, DzTabsProps, TAB_VARIANTS, TAB_SIZE_VARIANT } from '../../src/atoms/DzTabs';
import { tabs } from '../../constants/mocks/DzTabs';

const meta: Meta = {
  title: 'Atoms/Controls/DzTabs',
  component: DzTabs,
  argTypes: {
    variant: { control: 'select', options: TAB_VARIANTS },
    size: { control: 'select', options: TAB_SIZE_VARIANT },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTabsProps> = args => (
  <DzTabs {...args}>
    <div className="p-5">Account Content</div>
    <div className="p-5">Company Content</div>
    <div className="p-5">Team members Content</div>
    <div className="p-5">Billing Content</div>
  </DzTabs>
);

export const PrimaryDzTabs = Template.bind({});
PrimaryDzTabs.args = { tabs };
