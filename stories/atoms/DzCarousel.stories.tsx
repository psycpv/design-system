import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzCarousel, DzCarouselProps } from '../../src/molecules/DzCarousel/DzCarousel';
import { CARD_TYPES, DzCard } from '../../src/molecules/DzCard/DzCard';
import { contentData } from '../../constants/mocks/DzCard';

const meta: Meta = {
  title: 'Molecules/Elements/DzCarousel',
  component: DzCarousel,
  argTypes: {
    slidesPerView: { control: 'number' },
  },
  parameters: {},
};

export default meta;

const Template: Story<DzCarouselProps> = args => (
  <DzCarousel {...args}>
    {Array(10)
      .fill(null)
      .map(_ => (
        <DzCard
          {...{
            data: contentData,
            type: CARD_TYPES.CONTENT,
            showGrid: false,
          }}
        />
      ))}
  </DzCarousel>
);

export const PrimaryDzCarousel = Template.bind({});
PrimaryDzCarousel.args = {};
