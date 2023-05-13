import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzHeroCarousel,
  DzHeroCarouselProps,
} from '../../src/molecules/DzHeroCarousel/DzHeroCarousel';
import { items } from '../../constants/mocks/DzHeroCarousel';

const meta: Meta = {
  title: 'Molecules/Content/DzHeroCarousel',
  component: DzHeroCarousel,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzHeroCarouselProps> = args => (
  <DzHeroCarousel {...args} />
);

export const PrimaryDzHeroCarousel = Template.bind({});
PrimaryDzHeroCarousel.args = { items };
