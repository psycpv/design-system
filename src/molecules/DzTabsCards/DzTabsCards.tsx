import React, { FC, useMemo } from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '../../utils/classnames';
import { DzCard, CARD_TYPES } from '../index';
import { DzGridColumns, DzColumn, ColumnSpan } from '../../layout';
import { DzText, TEXT_SIZES } from '../../atoms';
import useWindowSize from '../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../layout/breakpoints';

export interface DzTabsCardsProps {
  tabs: any[];
  span: ColumnSpan | ColumnSpan[];
}

const styles: any = {
  tab: `
    outline-black-10
    outline-offset-4
    underline
    decoration-transparent
    decoration-black-60
    hover:decoration-current
    duration-300
    ease-in
    hover:outline-1
    hover:text-black-100
    underline-offset-[0.375rem]
  `,
  tabsContainer: `
    mb-10
    flex
    gap-10
    overflow-y-hidden
    overflow-x-auto
    scrollbar-none
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
    duration-300
    ease-in
  `,
  tabTitle: `
    md:text-xl
  `,
  gridCol: `
    md:gap-5
  `,
  cardCol:`
    mb-10
  `
};

const tabsRender = tabs => {
  return tabs.map(tab => {
    return (
      <Tab className={cn(styles.tab)}>
        {({ selected }) => (
          <DzText
            text={tab.title}
            textSize={TEXT_SIZES.LARGE}
            className={cn(
              styles.tabTitle,
              selected ? styles.selectedTab : styles.unselectedTab
            )}
          />
        )}
      </Tab>
    );
  });
};

const tabsPanels = ({ tabs, span, isSmall = false }) => {
  return tabs.map((tab, key) => {
    const { cards } = tab;
    return (
      <Tab.Panel key={`${key}`}>
        <DzGridColumns className={cn(styles.gridCol)}>
          {cards.map(card => {
            return (
              <DzColumn span={span} className={cn(styles.cardCol)}>
                <DzCard
                  type={CARD_TYPES.CONTENT}
                  data={{ ...card, hideImage: isSmall }}
                />
              </DzColumn>
            );
          })}
        </DzGridColumns>
      </Tab.Panel>
    );
  });
};

export const DzTabsCards: FC<DzTabsCardsProps> = ({ tabs, span = 3 }) => {
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width < BREAKPOINTS.MD;
  }, [width]);

  return (
    <Tab.Group as="div">
      <Tab.List className={cn(styles.tabsContainer)}>
        {tabsRender(tabs)}
      </Tab.List>
      <Tab.Panels>{tabsPanels({ tabs, span, isSmall })}</Tab.Panels>
    </Tab.Group>
  );
};

export default DzTabsCards;
