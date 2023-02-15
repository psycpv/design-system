import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzPaginationCard , DzPaginationCardProps} from '../../src/unstyled/DzPaginationCard';

const meta: Meta = {
  title: 'Unstyled/Navigation/Pagination/DzPaginationCard',
  component: DzPaginationCard,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPaginationCardProps> = args => <DzPaginationCard {...args}/>

export const PrimaryDzPaginationCard = Template.bind({});
PrimaryDzPaginationCard.args = { };