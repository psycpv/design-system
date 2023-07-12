import React, { FC, useMemo, useState } from 'react';
import { cn } from '../../utils/classnames';
import { DzSectionMenuProps } from './types';
import { styles } from './styles';
import { DzButton, DzSelect } from '../../atoms';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import { ArrowDown } from '../../svgIcons';
import useHover from '../../hooks/useHover';

export const DzSectionMenu: FC<DzSectionMenuProps> = ({
  sections,
  cta,
  onSelection,
}) => {
  const [isHover, setIsHover] = useState(false);

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
      })),
    [sections]
  );

  return (
    <div className={cn(styles.sectionsContainer)}>
      {isMobile ? (
        <DzSelect
          className={cn(styles.mblSelector)}
          customSelectClass={cn(styles.mblOptionBox)}
          onSelect={element => onSelection(element?.id ?? element?.value)}
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
            {sections.map(section => {
              const { text, id } = section;
              return (
                <li
                  className={cn(
                    styles.listItem,
                    isHover ? styles.grayLink : ''
                  )}
                  onClick={() => onSelection(id)}
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
