import React, { FC } from 'react';
import {
  DzText,
  TEXT_TYPES,
  TEXT_SIZES,
  DzTitle,
  TITLE_SIZES,
  DzLink,
  DzLinkProps,
  TITLE_TYPES,
} from '../../atoms';
import { cn } from '../../utils/classnames';

export interface DzTitleMoleculeProps {
  category?: string;
  title: string;
  subtitle?: string;
  description?: string;
  linkCTA?: LinkCTA;
}

interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
}

const styles: any = {
  titleContainer: `
    block
    w-full
    flex
    flex-col
    gap-5
    md:flex-row
  `,
  leftContainer: `
    w-full
    flex
    flex-col
    gap-2.5
  `,
  rightContainer: `
    flex
    flex-col
  `,
  titleClassContainer: `
    w-full
  `,
  title: `
    text-xl
    md:text-xxl
  `,
  description: `
    my-2.5
    md:text-md
  `,
  titleSection: `
    flex
    gap-5
    justify-between
  `,
  linkCta: `
    min-w-fit
  `,
  linkText:`
    text-xs
    md:text-sm
  `
};

export const DzTitleMolecule: FC<DzTitleMoleculeProps> = ({
  category,
  title,
  subtitle,
  description,
  linkCTA,
}) => {
  const splitIt = description ? 'basis-1/2' : '';
  const titleStyles = linkCTA?.text? 'md:text-xxl': styles.title;
  return (
    <div className={cn(styles.titleContainer)}>
      <div className={cn(styles.leftContainer, splitIt)}>
        {category ? (
          <DzText className={cn(styles.slugText)} text={category} />
        ) : null}
        <div className={cn(styles.titleSection)}>
          <DzTitle
            title={title}
            className={cn(styles.titleClassContainer)}
            classNameTitle={cn(titleStyles)}
            classNameSubtitle={cn(titleStyles)}
            titleType={TITLE_TYPES.H2}
            titleSize={TITLE_SIZES.LG}
            subtitleSize={TITLE_SIZES.LG}
            subtitle={subtitle}
            subtitleType={TITLE_TYPES.H3}
          />
          {linkCTA ? (
            <div className={cn(styles.linkCta)}>
              <DzLink
                {...(linkCTA.linkProps ?? {})}
                className={cn(styles.linkText)}
                href={linkCTA.url}
                LinkElement={linkCTA.linkElement}
              >
                {linkCTA.text}
              </DzLink>
            </div>
          ) : null}
        </div>
      </div>
      {description ? (
        <div className={cn(styles.rightContainer, splitIt)}>
          <DzText className={cn(styles.description)} text={description} />
        </div>
      ) : null}
    </div>
  );
};

export default DzTitleMolecule;
