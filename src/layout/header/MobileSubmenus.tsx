import React, { FC } from 'react';
import { cn } from '../../utils/classnames';
import ArrowDown from '../../svgIcons/arrowDown';
import DzLink from '../../atoms/DzLink';
import { Disclosure } from '@headlessui/react';
import { renderItems } from './MenuItems';

interface MobileSubmenuProps {
  title: string;
  items: any[];
  rootUrl?: string;
}

const styles: any = {
  panelItems: `
    pl-[0.9375rem]
  `,
  caretIcon: `
    p-2 
  `,
  upArrow: `
    rotate-180
  `,
  rootLink: `
    w-full
  `,
  mobileOption: `
    p-5
    flex
    justify-between
  `,
};

export const MobileSubmenus: FC<MobileSubmenuProps> = ({
  title = '',
  rootUrl = '',
  items = [],
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className={cn(styles.mobileOption)}>
            <DzLink className={cn(styles.rootLink)} href={rootUrl}>
              {title}
            </DzLink>
            <Disclosure.Button className={cn(styles.caretIcon)}>
              <ArrowDown className={cn(open ? styles.upArrow : '')} />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className={cn(styles.panelItems)}>
            <ul>{renderItems(items, true)}</ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
