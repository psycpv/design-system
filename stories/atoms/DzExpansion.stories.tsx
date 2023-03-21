import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzExpansion, DzExpansionProps } from '../../src/atoms/DzExpansion';
import { sections } from '../../constants/mocks/DzExpansion';
const meta: Meta = {
  title: 'Atoms/Expansions/DzExpansion',
  component: DzExpansion,
  argTypes: {
    title: { type: 'string', defaultValue: 'Section Title' },
    subtitle: { type: 'string', defaultValue: 'Supporting Copy Line' },
    linkText: { type: 'string', defaultValue: 'Supporting Copy Line' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzExpansionProps> = args => <DzExpansion {...args} />;

export const PrimaryDzExpansion = Template.bind({});
PrimaryDzExpansion.args = { sections };
