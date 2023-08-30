import { AddressData } from '../types/DzTitleExhibitionTypes';

export const splitLocationAddressLines = (
  location?: AddressData
): Array<string> => {
  if (!location) {
    return [];
  }
  const { addressLine, addressLine2, city, state, zipCode } = location;

  switch (city) {
    case 'New York':
      if (addressLine.includes('20th')) {
        return addressLine2
          ? [`${addressLine}, ${addressLine2}`, `${city}, ${state} ${zipCode}`]
          : [addressLine, `${city}, ${state} ${zipCode}`];
      }
      return [addressLine, `${city}, ${state} ${zipCode}`, 'USA'];
    case 'Los Angeles':
      return [addressLine, `${city}, CA ${zipCode}`];
    case 'London':
      return addressLine2
        ? [`${addressLine}, ${addressLine2}`, `${city} ${zipCode}`]
        : [addressLine, `${city} ${zipCode}`];
    case 'Paris':
      return [addressLine, `${city} ${zipCode}`];
    case 'Hong Kong':
      return [addressLine, city];
  }
  return [addressLine, `${city}, ${state} ${zipCode}`];
};
