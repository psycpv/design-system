import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzComplexGrid,
  DzComplexGridProps,
} from '../../src/molecules/DzComplexGrid/DzComplexGrid';
import { cards } from '../../constants/mocks/DzComplexGrid';

const meta: Meta = {
  title: 'Molecules/Content/DzComplexGrid',
  component: DzComplexGrid,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzComplexGridProps> = args => <DzComplexGrid {...args} />;

export const PrimaryDzComplexGrid = Template.bind({});
PrimaryDzComplexGrid.args = { cards, displayNumberOfResults: true };
