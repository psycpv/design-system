import React, {
  ReactNode,
  useRef,
  useMemo,
  useState,
  useEffect,
  Fragment,
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
  const [rightNavEnabled, setRightNavEnabled] = useState(false);
  const [leftNavEnabled, setLeftNavEnabled] = useState(false);
  const [navTopOffset, setTopNavOffset] = useState('50%');

  useEffect(() => {
    setLeftNavEnabled(!swiperElRef?.current?.swiper.isBeginning);
    setRightNavEnabled(!swiperElRef?.current?.swiper.isEnd);

    swiperElRef?.current?.addEventListener('progress', () => {
      setLeftNavEnabled(!swiperElRef?.current?.swiper.isBeginning);
      setRightNavEnabled(!swiperElRef?.current?.swiper.isEnd);
    });

    swiperElRef?.current?.addEventListener('reachend', _ =>
      setRightNavEnabled(false)
    );

    swiperElRef?.current?.addEventListener('reachbeginning', _ =>
      setLeftNavEnabled(false)
    );
  }, [swiperElRef?.current]);

  const swiperContainerProps = isSmall
    ? {
        class: 'pb-0',
        'space-between': 20,
      }
    : {
        class: 'pb-16',
        'space-between': 120,
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
        // Force web element to re-render when breakpoint change
        key={JSON.stringify(isSmall)}
        ref={swiperElRef}
        navigation="true"
        pagination="false"
        navigation-next-el="null"
        keyboard-enabled="true"
        mousewheel="true"
        mousewheel-force-to-axis="true"
        scrollbar="false"
        slides-per-view="auto"
        slides-offset-before={OFFSET_BEFORE}
        slides-offset-after={OFFSET_AFTER}
        free-mode="true"
        free-mode-minimum-velocity="0.2"
        free-mode-momentum-velocity-ratio="0.5"
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
        show={!isSmall && showNav}
        enter="transition ease-in duration-500"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-out duration-500"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
      >
        <DzArrow
          ref={leftArrowRef}
          disabled={!leftNavEnabled}
          className="absolute left-10 z-10"
          style={{ top: navTopOffset }}
          onClick={() => swiperElRef.current?.swiper.slidePrev()}
          direction={ARROW_DIRECTIONS.LEFT}
          mode={ARROW_MODES.DARK_BACKGROUND}
          aria-label="Previous slide"
        />
      </Transition>

      <Transition
        as={Fragment}
        show={!isSmall && showNav}
        enter="transition ease-in duration-500"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-out duration-500"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
      >
        <DzArrow
          ref={rightArrowRef}
          className="absolute right-10 z-10"
          style={{ top: navTopOffset }}
          disabled={!rightNavEnabled}
          onClick={() => swiperElRef.current?.swiper.slideNext()}
          direction={ARROW_DIRECTIONS.RIGHT}
          mode={ARROW_MODES.DARK_BACKGROUND}
          aria-label="Next slide"
        />
      </Transition>
    </div>
  );
};

export default DzCarousel;
