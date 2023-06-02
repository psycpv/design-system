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
  children: ReactNode[];
  swiperProps?: any;
}

export const DzCarousel: React.FunctionComponent<DzCarouselProps> = ({
  children,
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

    swiperElRef?.current?.addEventListener('transitionend', () => {
      setShowLeftNav(!swiperElRef?.current?.swiper.isBeginning);
      setShowRightNav(!swiperElRef?.current?.swiper.isEnd);
    });

    swiperElRef?.current?.addEventListener('reachend', _ =>
      setShowRightNav(false)
    );

    swiperElRef?.current?.addEventListener('reachbeginning', _ =>
      setShowLeftNav(false)
    );
  }, [swiperElRef?.current]);

  const swiperContainerProps = isSmall
    ? {
        class: 'pb-14',
        'space-between': 20,
        'slides-offset-before': '0',
        scrollbar: 'false',
      }
    : {
        class: 'pb-14',
        'space-between': 120,
        'slides-offset-before': '0',
        scrollbar: 'true',
        'grab-cursor': true,
      };
  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      <swiper-container
        ref={swiperElRef}
        navigation="true"
        pagination="false"
        navigation-next-el="null"
        keyboard-enabled="true"
        mousewheel="true"
        mousewheel-force-to-axis="true"
        scrollbar-draggable="true"
        slides-per-view="auto"
        {...swiperContainerProps}
        {...swiperProps}
      >
        {children?.map((ch, index) => (
          <swiper-slide
            key={index}
            class={
              isSmall ? 'max-w-[calc(100%*5/6)]' : 'max-w-[calc(50%-10px)]'
            }
          >
            {ch}
          </swiper-slide>
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
