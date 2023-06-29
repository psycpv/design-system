import React, { FC, Fragment, ReactElement, Children } from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '../utils/classnames';

export const TAB_TYPES = {
  NAV: 'nav',
  CONTENT: 'content',
};

export const TAB_SIZE = {
  FULL: 'full',
  PARTIAL: 'partial',
};
export const TAB_SIZE_VARIANT = [TAB_SIZE.FULL, TAB_SIZE.PARTIAL] as const;
export const TAB_VARIANTS = [TAB_TYPES.NAV, TAB_TYPES.CONTENT] as const;
export type TabVariant = typeof TAB_VARIANTS[number];
export type TabSize = typeof TAB_SIZE_VARIANT[number];

interface TabItem {
  title: string;
  href?: string;
  current?: boolean;
}
export interface DzTabsProps {
  variant: TabVariant;
  size: TabSize;
  tabs: TabItem[];
  ariaCurrentType?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true';
  ariaLabel?: string;
  children: ReactElement[];
}

const styles: any = {
  tabList: `
    shadow-bottomBorderBlack20
    flex
  `,
  selectedTab: `
    text-black-100
    shadow-bottomBorderBlack60
  `,
  unselectedTab: `
    border-transparent
    text-black-60
    hover:text-black-100
    hover:underline
    hover:decoration-current
  `,
  defaultTab: `
    cursor-pointer
    text-center
    font-medium
    text-sm
    py-4
    outline-none
  `,
  underline: `
    decoration-transparent
    duration-300
    ease-in
    underline-offset-[0.375rem]
    decoration-1
    transition-text-decoration
    decoration-black-60 
  `,
  full: `
    w-full
    px-1
  `,
  partial: `
    w-fit
    px-5
  `,
};

export const DzTabs: FC<DzTabsProps> = ({
  tabs = [],
  variant = TAB_TYPES.CONTENT,
  size = TAB_SIZE.FULL,
  ariaCurrentType = 'true',
  ariaLabel = 'Tabs',
  children,
}) => {
  const renderPanels = Children.map(children, child => {
    return <Tab.Panel> {child}</Tab.Panel>;
  });
  const listType = variant === TAB_TYPES.CONTENT ? 'div' : 'nav';
  const ItemType = variant === TAB_TYPES.CONTENT ? 'div' : 'a';
  return (
    <Tab.Group>
      <Tab.List
        as={listType}
        className={cn(styles.tabList)}
        aria-label={ariaLabel}
      >
        {tabs.map(({ title, current, ...rest }) => (
          <Tab as={Fragment}>
            {({ selected }) => (
              <ItemType
                key={title}
                className={cn(
                  selected ? styles.selectedTab : styles.unselectedTab,
                  styles.defaultTab,
                  styles.underline,
                  styles[size]
                )}
                aria-current={selected ? ariaCurrentType : undefined}
                {...rest}
              >
                {title}
              </ItemType>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>{renderPanels}</Tab.Panels>
    </Tab.Group>
  );
};

export default DzTabs;
