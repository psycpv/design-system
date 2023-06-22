import { DzMediaProps } from "../../../atoms";

export interface CardMediaData {
  id?: string;
  media: DzMediaProps;
  description: string;
}

export interface CardMediaProps {
  data: CardMediaData;
}
