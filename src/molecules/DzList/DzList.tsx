import React, {
  FC,
  useMemo,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import { DzLink, LINK_VARIANTS, TEXT_LINK_SIZES } from '../../atoms';
import { DzGridColumns, DzColumn, ColumnSpan } from '../../layout/DzGrid';
import { DzListProps } from './types';
import { styles } from './styles';
import { cn } from '../../utils/classnames';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import {
  getStartingChars,
  ascLastNameThenFirstName,
  groupItemsByColumn,
} from './utils';

export const DzList: FC<DzListProps> = ({
  numberOfCol = 4,
  list,
  sort = false,
  stickyOffset = '0px',
  customSort,
}) => {
  const keyOfFirstElement = useRef(1);
  const prevChar = useRef('');

  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);

  const alphabetItems = useMemo(() => {
    return getStartingChars(list);
  }, [list]);

  const [currentChar, setCurrentChar] = useState('A');

  const scrollToElement = useCallback(letter => {
    const element = document.getElementById(`${letter}-section-1`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const sortedList = useMemo(() => {
    const sortFunction = customSort ? customSort : ascLastNameThenFirstName;
    return sort ? list.sort(sortFunction) : list;
  }, [sort, list, customSort]);

  const spanCol = useMemo(() => 12 / numberOfCol, [numberOfCol]);

  const itemsByColumn = useMemo(() => {
    return groupItemsByColumn(sortedList);
  }, [sortedList]);

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport) return;
    const elements = document.querySelectorAll(`[id$='-section-1']`);
    const root = document.querySelector('[id$="-options-container"]');

    if (!elements.length) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const letter = entry.target.id.charAt(0);
          const isUpperValue =
            entry.intersectionRect.y < 200 && entry.intersectionRect.y > 0;

          if (isUpperValue) {
            setCurrentChar(letter);
          }
        });
      },
      {
        root,
        threshold: 1,
        rootMargin: '-120px 0px 0px 0px',
      }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (!itemsByColumn || !itemsByColumn.length) return null;

  return (
    <div className={cn(styles.menu)}>
      {isMobile && alphabetItems?.length ? (
        <ul style={{ top: stickyOffset }} className={cn(styles.menuList)}>
          {alphabetItems.map((letter, key) => {
            return (
              <li key={`${letter}-option-${key}`}>
                <button
                  className={cn(
                    styles.listItem,
                    currentChar === letter
                      ? styles.activeItem
                      : styles.defaultItem
                  )}
                  onClick={el => {
                    setCurrentChar(letter);

                    const element: any = el.target;
                    if (element) {
                      element.focus();
                    }
                    scrollToElement(letter);
                  }}
                >
                  {letter}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      <div id="options-container">
        <DzGridColumns className="h-full w-full">
          {itemsByColumn.map((columnItems, i) => {
            return (
              <DzColumn key={`col-${i}`} span={spanCol as ColumnSpan}>
                <ul className={cn(styles.column)}>
                  {columnItems.map((item, k) => {
                    const { url, text, lastName } = item;
                    const currentChar = lastName.charAt(0);
                    if (prevChar.current === currentChar) {
                      keyOfFirstElement.current = keyOfFirstElement.current + 1;
                    } else {
                      keyOfFirstElement.current = 1;
                    }
                    prevChar.current = currentChar;
                    return (
                      <li
                        style={{
                          scrollMarginTop: `calc(3.5rem + ${stickyOffset})`,
                        }}
                        className={cn(styles.listLink)}
                        key={`${text}-${k}`}
                        id={`${currentChar}-section-${keyOfFirstElement.current}`}
                      >
                        <DzLink
                          LinkElement="a"
                          href={url}
                          variant={LINK_VARIANTS.NAV}
                          textLinkSize={
                            isMobile ? TEXT_LINK_SIZES.LG : TEXT_LINK_SIZES.MD
                          }
                        >
                          {text}
                        </DzLink>
                      </li>
                    );
                  })}
                </ul>
              </DzColumn>
            );
          })}
        </DzGridColumns>
      </div>
    </div>
  );
};

export default DzList;
