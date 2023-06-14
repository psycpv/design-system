import React, {
  FC,
  Fragment,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { Popover } from '@headlessui/react';

import { cn } from '../../utils/classnames';
import useHover from '../../hooks/useHover';
import useFocus from '../../hooks/useFocus';
import { DzLink, DzLinkProps, RouterProps } from '../../atoms';
import { renderItems } from './MenuItems';

export interface DesktopSubmenuProps {
  title: string;
  items: any[];
  rootUrl?: string;
  linkProps?: DzLinkProps | RouterProps;
  linkClass?: string;
}

const styles: any = {
  headerContainer: `
    flex
    w-full
    bg-white-100
    p-5
    items-center
    z-50
  `,
  logo: `
    pl-2.5
    h-5
  `,
  leftSide: `
    w-fit
  `,
  rightSide: `
    flex
    w-full
    gap-10
    items-center
    justify-end
  `,
  submenuContainer: `
    absolute
  `,
  childMenus: `
    bg-white-100
    flex
    flex-col
    py-[0.875rem]
    z-30
    min-w-[10.3164rem]
    gap-3
  `,
  rootDesktop: `
    px-2.5
    cursor-pointer
    w-full
    block
    relative
    z-40
  `,
  show: `
    block
  `,
  hide: `
    hidden
  `,
};

export const DesktopSubmenu: FC<DesktopSubmenuProps> = ({
  title = '',
  rootUrl = '',
  items = [],
  linkProps = {},
  linkClass = '',
}) => {
  const [hoverOverMenu, SetHoverOverMenu] = useState(false);
  const [visitedFocusElements, setVisitedFocusElements] = useState(0);
  const rootElement = useRef<HTMLAnchorElement | null>(null);
  const rootAnchor = useRef<HTMLAnchorElement | null>(null);
  const isHoverRoot = useHover(rootElement);
  const isFocused = useFocus(rootAnchor);
  const showElements = useMemo(() => {
    const hasChildSelected = visitedFocusElements === items.length;
    return (isHoverRoot || hoverOverMenu) && !hasChildSelected;
  }, [isHoverRoot, hoverOverMenu, visitedFocusElements]);
  const showClasses = useMemo(
    () => (showElements ? styles.show : styles.hide),
    [showElements]
  );
  const linkPropsHover = useMemo(() => (hoverOverMenu ? linkProps : {}), [
    hoverOverMenu,
    linkProps,
  ]);

  const resetVisibleFocus = useCallback(() => {
    setVisitedFocusElements(0);
  }, []);
  const handleUserKeyPress = useCallback(
    event => {
      const { key, keyCode } = event;
      if (keyCode === 13 && key === 'Enter' && isFocused) {
        SetHoverOverMenu(true);
      }
    },
    [isFocused]
  );

  return (
    <Popover as={Fragment}>
      <Popover.Button as={Fragment}>
        <DzLink
          ref={rootElement}
          {...linkProps}
          href={rootUrl}
          onKeyDown={handleUserKeyPress}
          onFocus={resetVisibleFocus}
          onMouseEnter={resetVisibleFocus}
          className={cn(
            showElements ? '!text-black-100' : '',
            styles.rootDesktop,
            linkClass
          )}
        >
          {title}
        </DzLink>
      </Popover.Button>
      <Popover.Panel
        as="ul"
        static
        className={cn(styles.childMenus, styles.submenuContainer, showClasses)}
        onMouseEnter={() => SetHoverOverMenu(true)}
        onMouseLeave={() => SetHoverOverMenu(false)}
        onBlur={() => setVisitedFocusElements(element => element + 1)}
      >
        {renderItems(items, false, linkPropsHover)}
      </Popover.Panel>
    </Popover>
  );
};
