import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzFooter, DzFooterProps } from '../../src/layout/footer/DzFooter';
import { footerData } from '../../constants/mocks/DzFooter';

const meta: Meta = {
  title: 'Layout/Navigation/DzFooter',
  component: DzFooter,
  parameters: {
    controls: { expanded: true }, 
  },
};

export default meta;

const Template: Story<DzFooterProps> = args => <DzFooter {...args} />;

export const PrimaryDzFooter = Template.bind({});
PrimaryDzFooter.args = { data: footerData };
