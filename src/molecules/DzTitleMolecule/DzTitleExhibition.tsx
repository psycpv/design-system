import React, { FC } from 'react';
import DzTitleMolecule, { DzTitleMoleculeTypes } from './DzTitleMolecule';
import {
  DzText,
  DzLink,
  TEXT_SIZES,
  TITLE_TYPES,
  LINK_VARIANTS,
} from '../../atoms';
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
    text-md
    text-black-60
    mb-[1.25rem]
  `,
  infoColumnBody: `
    w-2/3
    md:w-full
    text-md
    text-black-100
  `,
  addressCity: `
    mb-[1.25rem]
  `,
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
            <div className={styles.infoColumnTitle}>Now Open</div>
            <div className={styles.infoColumnBody}>April 20-June,3 2023</div>
          </div>
        </DzColumn>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            <div className={styles.infoColumnTitle}>Location</div>
            <div className={styles.infoColumnBody}>
              <DzText
                textSize={TEXT_SIZES.MEDIUM}
                text={city}
                className={styles.addressCity}
              />
              <DzText textSize={TEXT_SIZES.MEDIUM} text={addressLine} />
              {addressLine2 && (
                <DzText
                  textSize={TEXT_SIZES.MEDIUM}
                  text={location.address.addressLine2}
                />
              )}
              <DzText
                textSize={TEXT_SIZES.MEDIUM}
                text={`${country}, ${zipCode}`}
              />
            </div>
          </div>
        </DzColumn>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            <div className={styles.infoColumnTitle}>Gallery Hours</div>
            <div className={styles.infoColumnBody}>
              {location.hours.map(({ day, availableTimes }) =>
                availableTimes.map(({ from, to }) => (
                  <DzText
                    text={`${day} ${from} - ${to}`}
                    textSize={TEXT_SIZES.MEDIUM}
                    key={day}
                  />
                ))
              )}
            </div>
          </div>
        </DzColumn>
        <DzColumn span={[12, 3]}>
          <div className={styles.infoColumnContainer}>
            <div className={styles.infoColumnTitle}>Artists</div>
            <div className={styles.infoColumnBody}>
              {artists?.map(({ fullName, artistPage }) =>
                artistPage?.slug?.current ? (
                  <DzLink
                    title={fullName}
                    href={artistPage.slug.current}
                    variant={LINK_VARIANTS.TEXT}
                    textLinkSize={TEXT_SIZES.MEDIUM}
                    key={fullName}
                  >
                    {fullName}
                  </DzLink>
                ) : (
                  <DzText
                    text={fullName}
                    textSize={TEXT_SIZES.MEDIUM}
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
