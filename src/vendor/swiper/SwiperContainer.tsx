import React, { forwardRef } from 'react';
import { register } from 'swiper/element/bundle';

interface SwiperContainer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  navigation?: string;
  scrollbar?: string;
  pagination?: string;
  class?: string;
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

export const SwiperContainer = forwardRef<HTMLElement, SwiperContainer>(
  ({ children, ...props }, ref) => (
    <swiper-container ref={ref} {...props}>
      {children}
    </swiper-container>
  )
);

export const SwiperSlide = ({ children, ...props }: any) => (
  <swiper-slide {...props}>{children}</swiper-slide>
);
