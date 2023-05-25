import React, { FC, useState, useEffect } from 'react';
import { DzHero } from '../index';

const ACTIONS = {
  NEXT: 'next',
  PREV: 'previous',
};
export const CAROUSEL_ACTIONS = [ACTIONS.NEXT, ACTIONS.PREV] as const;
export type CarouselActions = typeof CAROUSEL_ACTIONS[number];

export interface DzHeroCarouselProps {
  items: any[];
}

export const DzHeroCarousel: FC<DzHeroCarouselProps> = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<any>(null);

  const handleChange = (step: CarouselActions) => {
    const offSet = step === ACTIONS.NEXT ? 1 : -1;
    const newIndex = activeIndex + offSet;
    if (newIndex < 0) {
      return setActiveIndex(items.length - 1);
    }
    if (newIndex >= items.length) {
      return setActiveIndex(0);
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setCurrentSlide(items?.[activeIndex] ?? null);
  }, [activeIndex, items]);

  return (
    <>
      {currentSlide ? (
        <DzHero
          showArrows
          nextArrowHandler={() => handleChange(ACTIONS.NEXT)}
          previousArrowHandler={() => handleChange(ACTIONS.PREV)}
          {...currentSlide}
        />
      ) : null}
    </>
  );
};

export default DzHeroCarousel;
