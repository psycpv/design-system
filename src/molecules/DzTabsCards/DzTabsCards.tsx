import React, { FC, useMemo, useRef } from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '../../utils/classnames';
import { DzCard, CARD_TYPES } from '../index';
import { DzGridColumns, DzColumn, ColumnSpan } from '../../layout';
import { DzText, TEXT_SIZES } from '../../atoms';
import useWindowSize from '../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useHover from '../../hooks/useHover';

export interface DzTabsCardsProps {
  tabs: any[];
  span: ColumnSpan | ColumnSpan[];
  className?: string;
}

const styles: any = {
  tabGroup: `
    px-0
    md:px-5
  `,
  tabPanels: `
    px-5
    md:px-0
  `,
  tabList: `
    mb-10
    flex
    gap-10
    overflow-y-hidden
    overflow-x-auto
    scrollbar-none
    whitespace-nowrap

    before:content-['_']
    before:-mr-5
    after:content-['_']
    after:-ml-5
    md:before:content-none
    md:after:content-none
  `,
  tab: `
    outline-transparent
    outline-offset-4
    pb-1
  `,
  selectedTab: `
    text-black-100
  `,
  unselectedTab: `
    border-transparent
    text-black-60
    hover:text-black-100
    focus:text-black-100
    hover:decoration-black-60
    focus:decoration-black-60
  `,
  tabTitle: `
    underline
    decoration-1
    decoration-transparent
    hover:decoration-black-60
    duration-300
    ease-in
    text-lg
    md:text-xl
    underline-offset-[35%]
  `,
  cardCol: `
    mb-5
    md:mb-0
  `,
};

const tabsRender = (tabs, hoverRoot) => {
  return tabs.map(tab => {
    const { title } = tab;

    return (
      <Tab as="button" key={`${title}-tab`} className={cn(styles.tab)}>
        {({ selected }) => {
          const activeStyle = selected
            ? styles.selectedTab
            : styles.unselectedTab;
          const unselectedHover = hoverRoot ? activeStyle : styles.selectedTab;
          return (
            <DzText
              text={title}
              textSize={TEXT_SIZES.LARGE}
              className={cn(styles.tabTitle, unselectedHover)}
            />
          );
        }}
      </Tab>
    );
  });
};

const tabsPanels = ({ tabs, span, isSmall = false }) => {
  return tabs.map((tab, index) => {
    const { title, cards } = tab;
    return (
      <Tab.Panel key={`${title}-content-${index}`}>
        <DzGridColumns className={cn(styles.gridCol)}>
          {cards.map((card, key) => {
            const { id } = card;
            return (
              <DzColumn
                key={`card-${id}-${key}`}
                span={span}
                className={cn(styles.cardCol)}
              >
                <DzCard
                  type={CARD_TYPES.CONTENT}
                  data={{ ...card, hideImage: isSmall, size: span }}
                />
              </DzColumn>
            );
          })}
        </DzGridColumns>
      </Tab.Panel>
    );
  });
};

export const DzTabsCards: FC<DzTabsCardsProps> = ({
  tabs,
  span = 3,
  className = '',
}) => {
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);

  const hoverRef = useRef<HTMLButtonElement | null>(null);
  const isHover = useHover(hoverRef);

  return (
    <Tab.Group as="div" className={cn(styles.tabGroup, className)}>
      <Tab.List className={cn(styles.tabList)} ref={hoverRef}>
        {tabsRender(tabs, isHover)}
      </Tab.List>
      <Tab.Panels className={cn(styles.tabPanels)}>
        {tabsPanels({ tabs, span, isSmall })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default DzTabsCards;
