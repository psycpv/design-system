import { DzListItem } from './types';

export const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const getStartingChars = list => {
  const startingChars = list.map(item => item.lastName.trim().charAt(0)).sort();
  return startingChars.filter(
    (value, index, array) => array.indexOf(value) === index
  );
};

export const ascLastNameThenFirstName = (a: DzListItem, b: DzListItem) => {
  if (a?.lastName?.toLowerCase() < b?.lastName?.toLowerCase()) {
    return -1;
  }
  if (a?.lastName?.toLowerCase() > b?.lastName?.toLowerCase()) {
    return 1;
  }
  if (a?.firstName?.toLowerCase() < b?.firstName?.toLowerCase()) {
    return -1;
  }
  if (a?.firstName?.toLowerCase() > b?.firstName?.toLowerCase()) {
    return 1;
  }
  return 0;
};

const TOTAL_ROWS_PER_COL = 20;

export const groupItemsByColumn = sortedList => {
  if (!sortedList || !sortedList.length) return [];

  return sortedList.reduce((resultArray: any, item, index) => {
    const chunkIndex = Math.floor(index / (TOTAL_ROWS_PER_COL as number));
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as DzListItem[]);
};
