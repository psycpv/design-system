import { Transition } from '@headlessui/react';
import React, { FC, useState, Fragment, useCallback } from 'react';
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

  const handleChange = useCallback(
    (step: CarouselActions) => {
      const offset = step === ACTIONS.NEXT ? 1 : -1;
      setActiveIndex(
        prev => (((prev + offset) % items.length) + items.length) % items.length
      );
    },
    [setActiveIndex, items]
  );

  return (
    <>
      {items.map((currentSlide, index) => (
        <Transition.Root key={index} show={activeIndex === index} as={Fragment}>
          <DzHero
            showArrows
            enableTransitions
            nextArrowHandler={() => handleChange(ACTIONS.NEXT)}
            previousArrowHandler={() => handleChange(ACTIONS.PREV)}
            {...currentSlide}
          />
        </Transition.Root>
      ))}
    </>
  );
};

export default DzHeroCarousel;
