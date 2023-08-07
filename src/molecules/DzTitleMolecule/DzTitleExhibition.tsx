import React, { FC } from 'react';
import DzTitleMolecule, { DzTitleMoleculeTypes } from './DzTitleMolecule';
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
  location?: LocationData;
  pressReleasePDFURL?: string;
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
    mb-[1.25rem]
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
    mb-[5rem]
    md:mt-[5rem]
  `,
};

export const DzTitleExhibition: FC<DzTitleExhibitionProps> = ({
  artists,
  checklistPDFURL,
  location,
  pressReleasePDFURL,
  title,
}) => {
  const isSmall = useIsSmallWindowSize();
  const locationHours = location ? collectHours(location) : '';

  return (
    <>
      <DzTitleMolecule
        type={DzTitleMoleculeTypes.PAGE}
        data={{
          title,
          category: 'Exhibition',
          description: '  ', // TODO make description optional; current it is required to show CTA
          titleProps: {
            titleType: TITLE_TYPES.H1,
          },
          primaryCTA: {
            title: 'Inquire',
            supertitle: 'Interested?',
            ctaProps: {
              onClick: () => null,
            },
          },
        }}
      />
      <DzGridColumns className={styles.container}>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            <DzText className={styles.infoColumnTitle} text={'Now Open'} />
            <DzText
              className={styles.infoColumnBody}
              text={'April 20-June,3 2023'}
            />
          </div>
        </DzColumn>
        <DzColumn span={[12, 3]}>
          {location?.address && (
            <div className={styles.infoColumnContainer}>
              <DzText className={styles.infoColumnTitle} text={'Location'} />
              <div className={styles.infoColumnBody}>
                <DzText
                  text={location.address.city}
                  className={styles.addressCity}
                />
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
                  className={styles.mdText}
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
                  className={styles.mdText}
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
