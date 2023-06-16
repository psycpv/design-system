import React, {
  ReactNode,
  useRef,
  useMemo,
  useState,
  useEffect,
  Fragment,
  useLayoutEffect,
} from 'react';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import { ARROW_DIRECTIONS, ARROW_MODES, DzArrow } from '../../atoms';
import { Transition } from '@headlessui/react';
import { Swiper } from 'swiper/types';
import { OFFSET_AFTER, OFFSET_BEFORE, gridColsMaxWidths } from './util';
import { cn } from '../../utils/classnames';
import { SwiperContainer, SwiperSlide } from '../../vendor/swiper';
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

export interface DzCarouselProps {
  children: ReactNode[];
  swiperProps?: any;
  slideSpanDesktop?: number;
  slideSpanMobile?: number;
  className?: string;
}

export const DzCarousel: React.FunctionComponent<DzCarouselProps> = ({
  children,
  swiperProps,
  slideSpanDesktop = 6,
  slideSpanMobile = 10,
  className = '',
}) => {
  const swiperElRef = useRef<HTMLInputElement & { swiper: Swiper }>(null);
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);

  const { width } = useWindowSize();
  const isSmall = useMemo(() => width <= BREAKPOINTS.MD, [width]);
  const [showNav, setShowNav] = useState(false);
  const [showRightNav, setShowRightNav] = useState(false);
  const [showLeftNav, setShowLeftNav] = useState(false);
  const [navTopOffset, setTopNavOffset] = useState('50%');

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
        class: 'pb-0',
        'space-between': 20,
        scrollbar: 'false',
      }
    : {
        class: 'pb-16',
        'space-between': 120,
        scrollbar: 'true',
        'grab-cursor': true,
      };

  useIsomorphicLayoutEffect(() => {
    const imgHeight = (swiperElRef.current?.firstChild?.firstChild
      ?.firstChild as HTMLElement)?.querySelector('img')?.offsetHeight;

    const arrowHeight =
      leftArrowRef.current?.offsetHeight ||
      rightArrowRef.current?.offsetHeight ||
      40;

    if (imgHeight)
      setTopNavOffset(`${((imgHeight - arrowHeight) / 2).toFixed(1)}px`);
  }, [
    leftArrowRef.current,
    rightArrowRef.current,
    swiperElRef.current?.firstChild,
    children,
    slideSpanDesktop,
  ]);

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      <SwiperContainer
        ref={swiperElRef}
        navigation="true"
        pagination="false"
        navigation-next-el="null"
        keyboard-enabled="true"
        mousewheel="true"
        mousewheel-force-to-axis="true"
        scrollbar-draggable="true"
        slides-per-view="auto"
        slides-offset-before={OFFSET_BEFORE}
        slides-offset-after={OFFSET_AFTER}
        {...swiperContainerProps}
        {...swiperProps}
      >
        {children?.map((ch, index) => (
          <SwiperSlide
            key={index}
            class={cn(
              gridColsMaxWidths[isSmall ? slideSpanMobile : slideSpanDesktop],
              'h-auto'
            )}
          >
            {ch}
          </SwiperSlide>
        ))}
      </SwiperContainer>

      <Transition
        as={Fragment}
        show={!isSmall && showNav && showLeftNav}
        enter="transition ease-in duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <DzArrow
          ref={leftArrowRef}
          className={'absolute left-5 z-10'}
          style={{ top: navTopOffset }}
          onClick={() => swiperElRef.current?.swiper.slidePrev()}
          direction={ARROW_DIRECTIONS.LEFT}
          mode={ARROW_MODES.DARK_BACKGROUND}
        />
      </Transition>

      <Transition
        as={Fragment}
        show={!isSmall && showNav && showRightNav}
        enter="transition ease-in duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <DzArrow
          ref={rightArrowRef}
          className="absolute right-5 z-10"
          style={{ top: navTopOffset }}
          onClick={() => swiperElRef.current?.swiper.slideNext()}
          direction={ARROW_DIRECTIONS.RIGHT}
          mode={ARROW_MODES.DARK_BACKGROUND}
        />
      </Transition>
    </div>
  );
};

export default DzCarousel;
