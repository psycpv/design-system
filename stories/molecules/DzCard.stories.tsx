import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzCard,
  DzCardProps,
  CARD_TYPES,
} from '../../src/molecules/DzCard/DzCard';
import {
  mediaData,
  artWorkData,
  contentData,
} from '../../constants/mocks/DzCard';
import { DzColumn, DzGridColumns, ColumnSpan } from '../../src/layout/DzGrid';
import { cn } from '../../src/utils/classnames';

const meta: Meta = {
  title: 'Molecules/Content/DzCard',
  component: DzCard,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

const GridColumnsDebug = () => (
  <DzGridColumns
    position="absolute"
    className="absolute top-0 left-0 w-full h-full pointer-events-none m-0"
  >
    {Array.from(Array(12)).map((_, i) => (
      <DzColumn
        className={cn('z-0 bg-black-10 border border-black-20 h-screen')}
        key={i}
        span={[1]}
      />
    ))}
  </DzGridColumns>
);

export default meta;

interface CardStoryProps extends DzCardProps {
  span: ColumnSpan | ColumnSpan[];
}
const Template: Story<CardStoryProps> = ({ span, ...rest }) => {
  return (
    <DzGridColumns>
      {/* <GridColumnsDebug /> */}
      <DzColumn className="z-10 relative" span={span}>
        <DzCard {...rest} />
      </DzColumn>
    </DzGridColumns>
  );
};

export const MediaDzCard = Template.bind({});
MediaDzCard.args = { data: mediaData, span: 12, type: CARD_TYPES.MEDIA };

export const ArtworkDzCard = Template.bind({});
ArtworkDzCard.args = { data: artWorkData, span: 12, type: CARD_TYPES.ARTWORK };

export const ContentDzCard = Template.bind({});
ContentDzCard.args = { data: contentData, span: 12, type: CARD_TYPES.CONTENT };


export const ArtworkDzCard10 = Template.bind({});
ArtworkDzCard10.args = { data: artWorkData, span: 10, type: CARD_TYPES.ARTWORK };


export const ArtworkDzCard4 = Template.bind({});
ArtworkDzCard4.args = { data: artWorkData, span: 4, type: CARD_TYPES.ARTWORK };

export const ArtworkDzCard2 = Template.bind({});
ArtworkDzCard2.args = { data: artWorkData, span: 2, type: CARD_TYPES.ARTWORK };

