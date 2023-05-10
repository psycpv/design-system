import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzHeader, DzHeaderProps } from '../../src/layout/header/DzHeader';
import { menuData } from '../../constants/mocks/DzHeader';

const meta: Meta = {
  title: 'Layout/Navigation/DzHeader',
  component: DzHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzHeaderProps> = args => <DzHeader {...args} />;

export const PrimaryDzHeader = Template.bind({});
PrimaryDzHeader.args = { menu: menuData };
