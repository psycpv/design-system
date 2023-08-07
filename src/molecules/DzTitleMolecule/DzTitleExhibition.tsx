import React, { FC } from 'react';
import DzTitleMolecule, { DzTitleMoleculeTypes } from './DzTitleMolecule';
import { cn } from '../../utils/classnames';
import { DzText, DzLink, TITLE_TYPES, LINK_VARIANTS } from '../../atoms';
import { DzColumn, DzGridColumns } from '../../layout';

interface AddressData {
  addressLine: string;
  addressLine2: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
}
interface AvailableTimeData {
  from: string;
  to: string;
  _key: string;
  _type: string;
}
interface LocationHourData {
  day: string;
  availableTimes: Array<AvailableTimeData>;
}
interface LocationData {
  address: AddressData;
  hours: Array<LocationHourData>;
  name: string;
}
interface ArtistData {
  fullName: string;
  artistPage?: { slug?: any };
}

export interface DzTitleExhibitionProps {
  title: string;
  location: LocationData;
  artists: Array<ArtistData>;
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
};

const collectHours = (location: LocationData): Array<string> => {
  if (!location?.hours) {
    return [];
  }
  const hoursToLHD: Record<string, Array<LocationHourData>> = {};

  location.hours.forEach(locationHourData => {
    const { availableTimes } = locationHourData;

    availableTimes.forEach(({ from, to }) => {
      const fromToKey = `${from}-${to}`;
      let locationHourDatas = hoursToLHD[fromToKey];

      if (!locationHourDatas) {
        locationHourDatas = [];
        hoursToLHD[fromToKey] = locationHourDatas;
      }
      locationHourDatas.push(locationHourData);
    });
  });

  return Object.keys(hoursToLHD).map(hours => {
    const locationHourDatas = hoursToLHD[hours];
    const dayNames = locationHourDatas.map(({ day }) => day.slice(0, 3));

    return `${dayNames.join(', ')}: ${hours}`;
  });
};

const DzTitleExhibition: FC<DzTitleExhibitionProps> = ({
  artists,
  location,
  title,
}) => {
  const {
    city,
    country,
    addressLine,
    addressLine2,
    zipCode,
  } = location.address;
  const locationHours = collectHours(location);

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
            supertitle: 'Interested in this exhibition?',
            ctaProps: {
              onClick: () => null,
            },
          },
        }}
      />
      <DzGridColumns>
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
          <div className={styles.infoColumnContainer}>
            <DzText className={styles.infoColumnTitle} text={'Location'} />
            <div className={styles.infoColumnBody}>
              <DzText text={city} className={styles.addressCity} />
              <DzText
                text={addressLine}
                className={cn(styles.mdText, styles.black60Text)}
              />
              {addressLine2 && (
                <DzText
                  text={location.address.addressLine2}
                  className={cn(styles.mdText, styles.black60Text)}
                />
              )}
              <DzText
                text={`${country}, ${zipCode}`}
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
      </DzGridColumns>
    </>
  );
};

export default DzTitleExhibition;
