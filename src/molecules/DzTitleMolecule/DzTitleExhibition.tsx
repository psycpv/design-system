import React, { FC, useEffect, useState } from 'react';
import DzTitleMolecule, { DzTitleMoleculeTypes } from './DzTitleMolecule';
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

export interface DzTitleExhibitionProps {
  artists: Array<ArtistData>;
  checklistPDFURL?: string;
  displayDate?: string;
  endDate?: string;
  location?: LocationData;
  openingReception?: string;
  pressReleasePDFURL?: string;
  startDate?: string;
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
    mb-[1.25rem]
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
  pageTitleContainer:`
    mb-[2.5rem]
    md:mb-0
  `,
};

const EXHIBITION_STATES_TO_LABELS = {
  PRELAUNCH: 'Coming Soon',
  OPEN: 'Now Open',
  POSTLAUNCH: 'Past',
};

export const DzTitleExhibition: FC<DzTitleExhibitionProps> = ({
  artists,
  checklistPDFURL,
  displayDate,
  endDate,
  location,
  openingReception,
  pressReleasePDFURL,
  startDate,
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

      if (isValid(startDateObj) && isValid(endDateObj)) {
        if (isBefore(now, startDateObj)) {
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
  }, [endDate, startDate, setExhibitionState, setExhibitionDateRangeText]);

  return (
    <>
      <DzTitleMolecule
        type={DzTitleMoleculeTypes.PAGE}
        data={{
          title,
          category: 'Exhibition',
          customClass: styles.pageTitleContainer,
          description: '  ', // TODO make description optional; current it is required to show CTA
          descriptionColSpan: 6,
          titleProps: {
            titleType: TITLE_TYPES.H1,
          },
          primaryCTA: {
            title: 'Inquire',
            supertitle: 'Interested in this exhibition?',
            ctaProps: {
              onClick: () => null,
            },
          },
        }}
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
            {!isSmall && openingReception && (
              <>
                <DzText
                  text="Opening Reception"
                  className={cn(
                    styles.mdText,
                    styles.black60Text,
                    styles.openingReceptionTitle
                  )}
                />
                <DzText text={openingReception} className={cn(styles.mdText)} />
              </>
            )}
          </div>
        </DzColumn>
        {isSmall && openingReception && (
          <DzColumn span={12}>
            <div className={styles.infoColumnContainer}>
              <DzText
                text="Opening Reception"
                className={styles.infoColumnTitle}
              />
              <DzText
                text={openingReception}
                className={styles.infoColumnBody}
              />
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
