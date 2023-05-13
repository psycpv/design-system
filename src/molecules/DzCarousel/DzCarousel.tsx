// @ts-nocheck
import React, { ReactNode, useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

export interface DzCarouselProps {
  children: ReactNode[];
  slidesPerView: number;
}

export const DzCarousel: React.FunctionComponent<DzCarouselProps> = ({
  children,
  slidesPerView = 5,
}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={slidesPerView}
      navigation="true"
      scrollbar="true"
      pagination="false"
      space-between="40"
      class="pb-14 pr-40"
      navigation-next-el="null"
      slides-offset-after="-150"
      keyboard-enabled="true"
    >
      {children?.map(ch => (
        <swiper-slide>{ch}</swiper-slide>
      ))}
    </swiper-container>
  );
};

export default DzCarousel;
