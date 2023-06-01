import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzHero, DzHeroProps } from '../../src/molecules/DzHero/DzHero';
import { items } from '../../constants/mocks/DzHero';

const meta: Meta = {
  title: 'Molecules/Content/DzHero',
  component: DzHero,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzHeroProps> = args => <DzHero {...args} />;

export const FullWidthDzHero = Template.bind({});
FullWidthDzHero.args = { items: [items[0]] };

export const DzHeroCarousel = Template.bind({});
DzHeroCarousel.args = { items: items };
