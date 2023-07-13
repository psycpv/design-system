import React, { FC, useMemo, useState, useCallback, useEffect } from 'react';
import { cn } from '../../utils/classnames';
import { DzSectionMenuProps, SectionNavItem } from './types';
import { styles } from './styles';
import { DzButton, DzSelect } from '../../atoms';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import { ArrowDown } from '../../svgIcons';
import { scrollToElementId } from '../../utils/misc';

const HEADER_OFFSET = 120;
export const DzSectionMenu: FC<DzSectionMenuProps> = ({
  sections,
  cta,
  onSelection,
  prefix,
  usePrefix = false,
  sticky = false,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [menuSections, setMenuSections] = useState<SectionNavItem[]>(
    sections ?? []
  );

  const scrollToElement = useCallback(id => {
    scrollToElementId(id, sticky ? HEADER_OFFSET : 0);
  }, []);

  const handleSelection = useCallback(
    id => {
      if (onSelection) onSelection(id);
      if (usePrefix) scrollToElement(`${prefix}${id}`);
    },
    [onSelection, usePrefix]
  );

  useEffect(() => {
    if (!usePrefix || !prefix) return;
    const elements = document.querySelectorAll(`[id^='${prefix}']`);
    if (!elements?.length) return;
    const foundSections: SectionNavItem[] = [];
    elements.forEach(element => {
      const elementId = element.id.replace(prefix, '');
      const name = elementId.replace(/-/g, ' ');
      foundSections.push({ text: name, id: elementId });
    });
    if (foundSections.length) {
      setMenuSections(foundSections);
    }
  }, [usePrefix, prefix]);

  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);

  const mobileSelectOptions = useMemo(
    () =>
      sections?.map(section => ({
        title: section?.text,
        value: section?.id,
        id: section?.id,
        disabled: false,
      })) ?? [],
    [sections]
  );

  return (
    <div className={cn(styles.sectionsContainer, sticky ? styles.sticky : '')}>
      {isMobile ? (
        <DzSelect
          className={cn(styles.mblSelector)}
          customSelectClass={cn(styles.mblOptionBox)}
          customListClass={cn(styles.mblList)}
          customItemClass={cn(styles.mblElem)}
          onSelect={element => handleSelection(element?.id ?? element?.value)}
          customIcon={<ArrowDown />}
          options={mobileSelectOptions}
        />
      ) : (
        <>
          <ul
            className={cn(styles.listDesktop)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {menuSections.map(section => {
              const { text, id } = section;
              return (
                <li
                  key={`submenu-item-${id ?? text}`}
                  className={cn(
                    styles.listItem,
                    isHover ? styles.grayLink : ''
                  )}
                  onClick={() => handleSelection(id)}
                >
                  {text}
                </li>
              );
            })}
          </ul>
          <hr
            style={{
              width: '0.0625rem',
              margin: '0rem 0.625rem',
              height: '1.25rem',
              display: 'inline-block',
              backgroundColor: '#CDCDCD',
            }}
          />
        </>
      )}

      <DzButton className={cn(styles.inquireBtn)} {...(cta?.ctaProps ?? {})}>
        {cta?.text}
      </DzButton>
    </div>
  );
};

export default DzSectionMenu;
