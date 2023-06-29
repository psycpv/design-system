import React, { FC } from 'react';
import {
  DzText,
  DzTitle,
  DzTitleProps,
  TITLE_SIZES,
  DzButton,
  DzButtonProps,
  TITLE_TYPES,
  BUTTON_SIZES,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { DzColumn, DzGridColumns } from '../../layout';
import { sliceMaxCharLength } from '../../utils/validators';

export interface DzTitlePageProps {
  category?: string;
  title: string;
  subtitle?: string;
  description?: string;
  titleProps?: DzTitleProps;
  primaryCTA?: CTATitle;
  customClass?: string;
}

interface CTATitle {
  ctaProps?: DzButtonProps;
  title: string;
  description?: string;
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
    basis-1/2
  `,
  rightContainer: `
    flex
    flex-col
    basis-1/2
    gap-5
    md:gap-0
  `,
  titleClassContainer: `
    w-full
  `,
  title: `
    text-xl
    md:text-xxl
  `,
  description: `
    md:text-md
  `,
};

const CHARACTER_LIMIT_TITLE = 50;
const CHARACTER_LIMIT_BODY = 500;

const DEFAULT_TITLE_PROPS = {
  titleType: TITLE_TYPES.P,
  titleSize: TITLE_SIZES.LG,
  subtitleSize: TITLE_SIZES.LG,
  subtitleType: TITLE_TYPES.P,
};

export const DzTitlePage: FC<DzTitlePageProps> = ({
  category,
  title,
  subtitle,
  description,
  titleProps = DEFAULT_TITLE_PROPS,
  primaryCTA,
  customClass = '',
}) => {
  return (
    <div className={cn(styles.titleContainer, customClass)}>
      <div className={cn(styles.leftContainer)}>
        {category ? <DzText text={category} /> : null}
        <DzTitle
          className={cn(styles.titleClassContainer)}
          classNameTitle={cn(styles.title)}
          classNameSubtitle={cn(styles.title)}
          {...titleProps}
          subtitle={sliceMaxCharLength(subtitle, CHARACTER_LIMIT_TITLE)}
          title={sliceMaxCharLength(title, CHARACTER_LIMIT_TITLE)}
        />
      </div>
      {description ? (
        <div className={cn(styles.rightContainer)}>
          <DzText
            className={cn(styles.description)}
            text={sliceMaxCharLength(description, CHARACTER_LIMIT_BODY)}
          />
          {primaryCTA ? (
            <DzGridColumns>
              <DzColumn span={4} start={9}>
                {primaryCTA.description ? (
                  <DzText
                    className="mb-[0.3125rem] text-black-60"
                    text={primaryCTA.description}
                  />
                ) : null}
                <DzButton
                  className="w-full"
                  {...primaryCTA.ctaProps}
                  size={BUTTON_SIZES.LARGE}
                >
                  {primaryCTA.title}
                </DzButton>
              </DzColumn>
            </DzGridColumns>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default DzTitlePage;
