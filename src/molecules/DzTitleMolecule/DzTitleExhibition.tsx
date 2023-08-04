import React, { FC } from "react";
import DzTitleMolecule, { DzTitleMoleculeTypes } from "./DzTitleMolecule";
import {DzText, TEXT_SIZES, TITLE_TYPES } from "../../atoms";
import { DzColumn, DzGridColumns } from "../../layout";


interface AddressData {
  addressLine:string;
  addressLine2:string;
  city:string;
  country:string;
  state:string;
  zipCode:string;
}
interface AvailableTimeData {
  from: string;
  to: string;
  _key: string;
  _type: string;
}
interface LocationHourData {
  day: string;
  availableTimes: Array<AvailableTimeData>
}
interface LocationData {
  address: AddressData,
  hours: Array<LocationHourData>,
  name: string;
}

export interface DzTitleExhibitionProps {
  title: string;
  location: LocationData;
}

const styles: any = {
  infoColumnTitle: `
    text-md
    text-black-60
    mb-[1.25rem]
  `,
  infoColumnBody: `
    text-md
    text-black-100
  `,
  addressCity: `
    mb-[1.25rem]
  `
}

const DzTitleExhibition: FC<DzTitleExhibitionProps> = ({title, location}) => {
  const {city, country, addressLine, addressLine2, zipCode} = location.address;

  return (
    <>
      <DzTitleMolecule
        type={DzTitleMoleculeTypes.PAGE}
        data={{
          title,
          category: "Exhibition",
          description: "  ", // TODO make description optional; current it is required to show CTA
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
        <DzColumn span={3}>
          <div className={styles.infoColumnTitle}>Now Open</div>
          <div className={styles.infoColumnBody}>April 20-June,3 2023</div>
        </DzColumn>
        <DzColumn span={3}>
          <div className={styles.infoColumnTitle}>Location</div>
          <div className={styles.infoColumnBody}>
            <DzText textSize={TEXT_SIZES.MEDIUM} text={city} className={styles.addressCity}/>
            <DzText textSize={TEXT_SIZES.MEDIUM} text={addressLine}/>
            {addressLine2 && <DzText textSize={TEXT_SIZES.MEDIUM} text={location.address.addressLine2}/>}
            <DzText textSize={TEXT_SIZES.MEDIUM} text={`${country}, ${zipCode}`}/>
          </div>
        </DzColumn>
        <DzColumn span={3}>
          <div className={styles.infoColumnTitle}>Gallery Hours</div>
          <div className={styles.infoColumnBody}>
            {location.hours.map(({day, availableTimes}) => (
              availableTimes.map(({from, to}) => (
                <DzText text={`${day} ${from} - ${to}`} textSize={TEXT_SIZES.MEDIUM}/>
              ))
            ))}
          </div>
        </DzColumn>
        <DzColumn span={3}>
          <div className={styles.infoColumnTitle}>Artists</div>
        </DzColumn>
      </DzGridColumns>
    </>
  )
}

export default DzTitleExhibition;
