import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzBreadcrumbs, DzBreadcrumbsProps } from '../../src/atoms/DzBreadcrumbs';
import { pages } from '../../constants/mocks/DzBreadcrumbs';

const meta: Meta = {
  title: 'Atoms/Controls/DzBreadcrumbs',
  component: DzBreadcrumbs,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzBreadcrumbsProps> = args => <DzBreadcrumbs {...args} />;

export const PrimaryDzBreadcrumbs = Template.bind({});
PrimaryDzBreadcrumbs.args = { pages };
