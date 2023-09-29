import { AddressData } from '../types/DzTitleExhibitionTypes';

export const splitLocationAddressLines = (
  location?: AddressData
): Array<string> => {
  if (!location) {
    return [];
  }
  const {
    addressLine,
    addressLine2,
    city,
    country,
    reverseZipAndCity,
    state,
    zipCode,
  } = location;

  if (country === 'Hong Kong') {
    return [`${addressLine}, ${addressLine2}`, `${city}, ${country}`];
  }
  switch (city) {
    case 'New York':
      if (addressLine.includes('20th')) {
        return addressLine2
          ? [`${addressLine}, ${addressLine2}`, `${city}, ${state} ${zipCode}`]
          : [addressLine, `${city}, ${state} ${zipCode}`];
      }
      return [addressLine, `${city}, ${state} ${zipCode}`];
    case 'Los Angeles':
      return [addressLine, `${city}, CA ${zipCode}`];
    case 'London':
      return addressLine2
        ? [`${addressLine}, ${addressLine2}`, `${city} ${zipCode}`]
        : [addressLine, `${city} ${zipCode}`];
    case 'Paris':
      if (reverseZipAndCity) {
        return [addressLine, `${zipCode} ${city}`];
      }
      return [addressLine, `${city} ${zipCode}`];
  }
  return [addressLine, `${city}, ${state} ${zipCode}`];
};
