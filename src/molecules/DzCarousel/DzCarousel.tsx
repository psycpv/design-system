import React, { ReactNode, useRef, useMemo } from 'react';
import { register } from 'swiper/element/bundle';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';

interface SwiperContainer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  navigation: string;
  scrollbar: string;
  pagination: string;
  class: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperContainer;
      'swiper-slide': any;
    }
  }
}

register();

export interface DzCarouselProps {
  children: ReactNode[];
  slidesPerViewDesktop?: number | string;
  slidesPerViewMobile?: number | string;
  swiperProps?: any;
}

export const DzCarousel: React.FunctionComponent<DzCarouselProps> = ({
  children,
  slidesPerViewDesktop = 5,
  slidesPerViewMobile = 1,
  swiperProps,
}) => {
  const swiperElRef = useRef(null);
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width < BREAKPOINTS.MD;
  }, [width]);

  const slidesPerView = isSmall ? slidesPerViewMobile : slidesPerViewDesktop;
  const swiperContainerProps = isSmall
    ? {
        'space-between': 20,
        class: 'pb-14 pr-14',
        'slides-offset-after': '-50',
      }
    : {
        'space-between': 40,
        'grab-cursor': true,
        class: 'pb-14 pr-40',
        'slides-offset-after': '-150',
      };

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={slidesPerView}
      navigation="true"
      scrollbar="true"
      pagination="false"
      navigation-next-el="null"
      keyboard-enabled="true"
      {...swiperContainerProps}
      {...swiperProps}
    >
      {children?.map(ch => (
        <swiper-slide>{ch}</swiper-slide>
      ))}
    </swiper-container>
  );
};

export default DzCarousel;
