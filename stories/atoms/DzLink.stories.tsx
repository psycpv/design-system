import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzLink , DzLinkProps} from '../../src/atoms/DzLink';

const meta: Meta = {
  title: 'Atoms/Controls/DzLink',
  component: DzLink,
  argTypes: {
    href: { type: 'string', defaultValue: '/' },
    LinkElement: { type: 'string', defaultValue: 'a' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzLinkProps> = args => <DzLink {...args}>Link</DzLink>

export const PrimaryDzLink = Template.bind({});
PrimaryDzLink.args = { };