import React, {
  ReactNode,
  useRef,
  useMemo,
  useState,
  useEffect,
  Fragment,
} from 'react';
import { register } from 'swiper/element/bundle';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import { BUTTON_VARIANTS, DzButton } from '../../atoms';
import { ChevronLeft, ChevronRight } from '../../svgIcons';
import { Transition } from '@headlessui/react';

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
  const isSmall = useMemo(() => width < BREAKPOINTS.MD, [width]);
  const [currentIndex, setCurrentIndex] = useState(
    swiperElRef.current?.swiper?.activeIndex ?? 0
  );
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    swiperElRef.current.addEventListener('slidechange', e => {
      const [swiper] = e.detail;
      setCurrentIndex(swiper.activeIndex);
    });
  }, []);

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
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
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

      <Transition
        show={showNav && currentIndex === 0}
        as={Fragment}
        enter="transition ease-in duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <DzButton
          className="flex items-center justify-center absolute left-0 top-1/2 z-10 h-20 w-20"
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => swiperElRef.current.swiper.slidePrev()}
        >
          <ChevronLeft
            fill="white"
            height={22}
            type="chevron-right"
            width={12}
          />
        </DzButton>
      </Transition>

      <Transition
        as={Fragment}
        show={showNav && currentIndex !== children.length - 1}
        enter="transition ease-in duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <DzButton
          className="flex items-center justify-center absolute right-0 top-1/2 z-10 h-20 w-20"
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => swiperElRef.current.swiper.slideNext()}
        >
          <ChevronRight
            fill="white"
            height={22}
            type="chevron-right"
            width={12}
          />
        </DzButton>
      </Transition>
    </div>
  );
};

export default DzCarousel;
