import {
  LocationHourData,
  LocationData,
} from '../types/DzTitleExhibitionTypes';

export const collectHours = (location: LocationData): Array<string> => {
  if (!location?.hours) {
    return [];
  }
  const hoursToLHD: Record<string, Array<LocationHourData>> = {};

  location.hours.forEach(locationHourData => {
    const { availableTimes } = locationHourData;

    availableTimes?.forEach(({ from, to }) => {
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
