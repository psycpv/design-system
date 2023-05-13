import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzTabsCards,
  DzTabsCardsProps,
} from '../../src/molecules/DzTabsCards/DzTabsCards';
import { tabs } from '../../constants/mocks/DzTabsCards';

const meta: Meta = {
  title: 'Molecules/Content/DzTabsCards',
  component: DzTabsCards,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTabsCardsProps> = args => <DzTabsCards {...args} />;

export const PrimaryDzTabsCards = Template.bind({});
PrimaryDzTabsCards.args = { tabs };
