import React, { FC, Fragment, useState, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { cn } from '../../utils/classnames';
import useHover from '../../hooks/useHover';
import { DzLink } from '../../atoms';
import { renderItems } from './MenuItems';

export interface DesktopSubmenuProps {
  title: string;
  items: any[];
  rootUrl?: string;
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
  rootMenu: `
    hover:decoration-transparent
    hover:no-underline
  `,
  childMenus: `
    bg-white-100
    flex
    flex-col
    gap-5
    py-5
    px-[1.875rem]
    z-50
  `,
};

export const DesktopSubmenu: FC<DesktopSubmenuProps> = ({
  title = '',
  rootUrl = '',
  items = [],
}) => {
  const [hoverOverMenu, SetHoverOverMenu] = useState(false);
  const rootElement = useRef<HTMLDivElement | null>(null);
  const isHoverRoot = useHover(rootElement);
  const showElements = isHoverRoot || hoverOverMenu;

  return (
    <Popover className="relative">
      <Popover.Button as={Fragment}>
        <div ref={rootElement}>
          <DzLink href={rootUrl} className={cn(styles.rootMenu)}>
            {title}
          </DzLink>
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        show={showElements}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel static className={cn(styles.submenuContainer)}>
          <ul
            className={cn(styles.childMenus)}
            onMouseEnter={() => SetHoverOverMenu(true)}
            onMouseLeave={() => SetHoverOverMenu(false)}
          >
            {renderItems(items)}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
