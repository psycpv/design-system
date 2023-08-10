import React, { FC, useEffect, useState } from 'react';
import {
  format,
  isBefore,
  isValid,
  isWithinInterval,
  parseISO,
} from 'date-fns';
import { cn } from '../../utils/classnames';
import { DzText, DzLink, TITLE_TYPES, LINK_VARIANTS } from '../../atoms';
import { DzColumn, DzGridColumns } from '../../layout';
import { useIsSmallWindowSize } from '../../hooks/useIsSmallWindowSize';
import { LocationData } from './types/DzTitleExhibitionTypes';
import { ArtistData } from './types/DzTitleExhibitionTypes';
import { collectHours } from './utils/collectHours';
import DzContainerTitle from './DzContainerTitle';

export interface DzTitleExhibitionProps {
  artists: Array<ArtistData>;
  checklistPDFURL?: string;
  displayDate?: string;
  endDate?: string;
  location?: LocationData;
  reception?: string;
  pressReleasePDFURL?: string;
  startDate?: string;
  status?: string;
  title: string;
}

const styles: any = {
  infoColumnContainer: `
    flex
    gap-[1.25rem]
    md:block
  `,
  infoColumnTitle: `
    w-1/3
    md:w-full
    md:text-md
    text-black-60
    mb-[0.625rem]
  `,
  infoColumnBody: `
    w-2/3
    md:w-full
    md:text-md
    text-black-100
  `,
  addressCity: `    
    md:text-md
  `,
  mdText: `
    md:text-md
  `,
  black60Text: `
    text-black-60
  `,
  locationHours: `
    mt-[0.5rem]
  `,
  container: `
    mb-[3.75rem]
    md:mt-[3.75rem]
  `,
  openingReceptionTitle: `
    md:mt-[1.25rem]
    md:mb-[0.625rem]
  `,
  smallText: `
    text-sm
  `,
  pageTitleContainer: `
    mb-[2.5rem]
    md:mb-0
  `,
};

const EXHIBITION_STATES_TO_LABELS = {
  PRELAUNCH: 'Coming Soon',
  OPEN: 'Now Open',
  POSTLAUNCH: 'Past',
};

const STATUS_TO_EXHIBITION_STATES = {
  close: 'POSTLAUNCH',
  open: 'OPEN',
  'coming soon': 'PRELAUNCH',
};

export const DzTitleExhibition: FC<DzTitleExhibitionProps> = ({
  artists,
  checklistPDFURL,
  displayDate,
  endDate,
  location,
  reception,
  pressReleasePDFURL,
  startDate,
  status,
  title,
}) => {
  const isSmall = useIsSmallWindowSize();
  const locationHours = location ? collectHours(location) : '';
  const [exhibitionState, setExhibitionState] = useState<
    'PRELAUNCH' | 'OPEN' | 'POSTLAUNCH' | undefined
  >();
  const [exhibitionDateRangeText, setExhibitionDateRangeText] = useState('');

  useEffect(() => {
    if (startDate && endDate) {
      const startDateObj = parseISO(startDate);
      const endDateObj = parseISO(endDate);
      const now = new Date();

      if (status || (isValid(startDateObj) && isValid(endDateObj))) {
        if (status && STATUS_TO_EXHIBITION_STATES[status]) {
          setExhibitionState(STATUS_TO_EXHIBITION_STATES[status]);
        } else if (isBefore(now, startDateObj)) {
          setExhibitionState('PRELAUNCH');
        } else if (
          isWithinInterval(now, { start: startDateObj, end: endDateObj })
        ) {
          setExhibitionState('OPEN');
        } else {
          setExhibitionState('POSTLAUNCH');
        }
        setExhibitionDateRangeText(
          `${format(startDateObj, 'MMMM d')}—${format(
            endDateObj,
            'MMMM d,yyyy'
          )}`
        );
      }
    }
  }, [
    endDate,
    startDate,
    setExhibitionState,
    setExhibitionDateRangeText,
    status,
  ]);

  return (
    <>
      <DzContainerTitle
        category="Exhibition"
        primaryCTA={{
          title: 'Inquire',
          description: 'Interested in this exhibition?',
        }}
        title={title}
        customCTAContainerProps={{
          span: 12,
          start: 1,
        }}
        fullLeftContainer
      />
      <DzGridColumns className={styles.container}>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            <DzText
              className={styles.infoColumnTitle}
              text={
                exhibitionState
                  ? EXHIBITION_STATES_TO_LABELS[exhibitionState]
                  : ''
              }
            />
            <DzText
              className={styles.infoColumnBody}
              text={displayDate || exhibitionDateRangeText}
            />
            {!isSmall && reception && (
              <>
                <DzText
                  text="Opening Reception"
                  className={cn(
                    styles.mdText,
                    styles.black60Text,
                    styles.openingReceptionTitle
                  )}
                />
                <DzText text={reception} className={cn(styles.mdText)} />
              </>
            )}
          </div>
        </DzColumn>
        {isSmall && reception && (
          <DzColumn span={12}>
            <div className={styles.infoColumnContainer}>
              <DzText
                text="Opening Reception"
                className={styles.infoColumnTitle}
              />
              <DzText text={reception} className={styles.infoColumnBody} />
            </div>
          </DzColumn>
        )}
        <DzColumn span={[12, 3]}>
          {location?.address && (
            <div className={styles.infoColumnContainer}>
              <DzText className={styles.infoColumnTitle} text={'Location'} />
              <div className={styles.infoColumnBody}>
                <DzText
                  text={location.address.city}
                  className={styles.addressCity}
                />
                <DzLink href={location.url} target="_blank">
                  <DzText
                    text={location.address.addressLine}
                    className={cn(styles.mdText, styles.black60Text)}
                  />
                  {location.address.addressLine2 && (
                    <DzText
                      text={location.address.addressLine2}
                      className={cn(styles.mdText, styles.black60Text)}
                    />
                  )}
                  <DzText
                    text={`${location.address.country}, ${location.address.zipCode}`}
                    className={cn(styles.mdText, styles.black60Text)}
                  />
                </DzLink>
                <DzText
                  className={cn(
                    styles.mdText,
                    styles.black60Text,
                    styles.locationHours
                  )}
                  text={locationHours}
                />
              </div>
            </div>
          )}
        </DzColumn>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            {/* TODO secondary gallery location here */}
          </div>
        </DzColumn>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            <DzText className={styles.infoColumnTitle} text="Artists" />
            <div className={styles.infoColumnBody}>
              {artists?.map(({ fullName, artistPage }) =>
                artistPage?.slug?.current ? (
                  <DzLink
                    title={fullName}
                    href={artistPage.slug.current}
                    variant={LINK_VARIANTS.TEXT}
                    className={styles.mdText}
                    key={fullName}
                  >
                    {fullName}
                  </DzLink>
                ) : (
                  <DzText
                    text={fullName}
                    className={styles.mdText}
                    key={fullName}
                  />
                )
              )}
            </div>
          </div>
        </DzColumn>
        {pressReleasePDFURL && (
          <DzColumn span={isSmall ? 12 : 3}>
            <div className={styles.infoColumnContainer}>
              <div className={styles.infoColumnTitle} />
              <div className={styles.infoColumnBody}>
                <DzLink
                  className={styles.smallText}
                  href={pressReleasePDFURL}
                  variant={LINK_VARIANTS.TEXT}
                >
                  View Press Release
                </DzLink>
              </div>
            </div>
          </DzColumn>
        )}
        {checklistPDFURL && (
          <DzColumn span={isSmall ? 12 : 3}>
            <div className={styles.infoColumnContainer}>
              <div className={styles.infoColumnTitle} />
              <div className={styles.infoColumnBody}>
                <DzLink
                  className={styles.smallText}
                  href={checklistPDFURL}
                  variant={LINK_VARIANTS.TEXT}
                >
                  Download Checklist
                </DzLink>
              </div>
            </div>
          </DzColumn>
        )}
      </DzGridColumns>
    </>
  );
};

export default DzTitleExhibition;
