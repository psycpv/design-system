export interface AddressData {
  addressLine: string;
  addressLine2?: string;
  city: string;
  country: string;
  state: string;
  reverseZipAndCity?: boolean;
  zipCode: string;
}
export interface AvailableTimeData {
  from: string;
  to: string;
  _key: string;
  _type: string;
}
export interface LocationHourData {
  day: string;
  availableTimes: Array<AvailableTimeData>;
}
export interface LocationData {
  address: AddressData;
  hours: Array<LocationHourData>;
  name: string;
  url: string;
}
export interface ArtistData {
  fullName: string;
  artistPage?: { slug?: any };
}
