export interface DzListProps {
  numberOfCol?: number;
  list: DzListItem[];
  sort?: boolean;
  stickyOffset?: string;
  customSort?: (a: DzListItem, b: DzListItem) => number;
}

export interface DzListItem {
  text: string;
  lastName: string;
  firstName: string;
  url: string;
}
