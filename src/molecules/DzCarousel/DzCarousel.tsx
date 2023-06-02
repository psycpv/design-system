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
import { Swiper } from 'swiper/types';
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

type ChildrenNode = ReactNode & React.ReactElement;

export interface DzCarouselProps {
  children: ChildrenNode[];
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
  const swiperElRef = useRef<HTMLInputElement & { swiper: Swiper }>(null);
  const { width } = useWindowSize();
  const isSmall = useMemo(() => width < BREAKPOINTS.MD, [width]);
  const [showNav, setShowNav] = useState(false);
  const [showRightNav, setShowRightNav] = useState(false);
  const [showLeftNav, setShowLeftNav] = useState(false);

  useEffect(() => {
    setShowLeftNav(!swiperElRef?.current?.swiper.isBeginning);
    setShowRightNav(!swiperElRef?.current?.swiper.isEnd);

    swiperElRef?.current?.addEventListener('slidechange', (e: any) => {
      const [swiper] = e.detail;
      setShowLeftNav(!swiper.isBeginning);
      setShowRightNav(!swiper.isEnd);
    });
  }, []);

  const slidesPerView = isSmall ? slidesPerViewMobile : slidesPerViewDesktop;
  const swiperContainerProps = isSmall
    ? {
        'space-between': 20,
        class: 'pb-14 pr-14',
        'slides-offset-after': '-40',
        'slides-offset-before': '20',
      }
    : {
        'space-between': 120,
        'grab-cursor': true,
        class: 'pb-14',
        'slides-offset-after': '20',
        'slides-offset-before': '20',
      };
  return (
    <div
      className="relative"
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
        {children?.map((ch, index) => (
          <swiper-slide key={index}>{ch}</swiper-slide>
        ))}
      </swiper-container>

      <Transition
        show={showNav && showLeftNav}
        as={Fragment}
        enter="transition ease-in duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <DzButton
          className="flex items-center justify-center absolute left-0 top-1/2 z-10 h-20 w-20 translate-y-[-50%] translate-x-0"
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => swiperElRef.current?.swiper.slidePrev()}
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
        show={showNav && showRightNav}
        enter="transition ease-in duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <DzButton
          className="flex items-center justify-center absolute right-0 top-1/2 z-10 h-20 w-20 translate-y-[-50%] translate-x-0"
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => swiperElRef.current?.swiper.slideNext()}
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
