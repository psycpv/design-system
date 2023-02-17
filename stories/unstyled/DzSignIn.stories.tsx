import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzSignIn, DzSignInProps } from '../../src/unstyled/DzSignIn';

const meta: Meta = {
  title: 'Unstyled/Forms/DzSignIn',
  component: DzSignIn,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzSignInProps> = args => <DzSignIn {...args} />;

export const PrimaryDzSignIn = Template.bind({});
PrimaryDzSignIn.args = {};
