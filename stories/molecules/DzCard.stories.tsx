import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzCard, DzCardProps, CARD_TYPES } from '../../src/molecules/DzCard';
import {
  mediaData,
  artWorkData,
  contentData,
} from '../../constants/mocks/DzCard';
import { DzColumn, DzGridColumns, ColumnSpan } from '../../src/layout/DzGrid';
import { cn } from '../../src/utils/classnames';
import { CardSizeType } from '../../src/molecules/DzCard/CardContent';

const meta: Meta = {
  title: 'Molecules/Content/DzCard',
  component: DzCard,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
    viewport: {
      defaultViewport: 'largeDesktop',
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
  showGrid?: boolean;
}
const Template: Story<CardStoryProps> = ({
  showGrid = false,
  span,
  ...rest
}) => {
  return (
    <div className="fullContainer">
      <DzGridColumns>
        {showGrid ? <GridColumnsDebug /> : null}
        <DzColumn className="z-10 relative" span={span}>
          <DzCard
            {...rest}
            data={{ ...rest.data, size: span as CardSizeType }}
          />
        </DzColumn>
      </DzGridColumns>
    </div>
  );
};

const mediaProps = { data: mediaData, type: CARD_TYPES.MEDIA, showGrid: false };
const artworkProps = {
  data: artWorkData,
  type: CARD_TYPES.ARTWORK,
  showGrid: false,
};
const contentProps = {
  data: contentData,
  type: CARD_TYPES.CONTENT,
  showGrid: false,
};

export const MediaDzCardCol12 = Template.bind({});
MediaDzCardCol12.args = { span: 12, ...mediaProps };

export const MediaDzCardCol10 = Template.bind({});
MediaDzCardCol10.args = { span: 10, ...mediaProps };

export const MediaDzCardCol6 = Template.bind({});
MediaDzCardCol6.args = { span: [6, 6], ...mediaProps };

export const MediaDzCardCol4 = Template.bind({});
MediaDzCardCol4.args = { span: 4, ...mediaProps };

export const MediaDzCardCol3 = Template.bind({});
MediaDzCardCol3.args = { span: 3, ...mediaProps };

export const MediaDzCardCol2 = Template.bind({});
MediaDzCardCol2.args = { span: 2, ...mediaProps };

export const ArtworkDzCardCol12 = Template.bind({});
ArtworkDzCardCol12.args = { span: 12, ...artworkProps };

export const ArtworkDzCardCol10 = Template.bind({});
ArtworkDzCardCol10.args = { span: 10, ...artworkProps };

export const ArtworkDzCardCol6 = Template.bind({});
ArtworkDzCardCol6.args = { span: [6, 6], ...artworkProps };

export const ArtworkDzCardCol4 = Template.bind({});
ArtworkDzCardCol4.args = { span: 4, ...artworkProps };

export const ArtworkDzCardCol3 = Template.bind({});
ArtworkDzCardCol3.args = { span: 3, ...artworkProps };

export const ArtworkDzCardCol2 = Template.bind({});
ArtworkDzCardCol2.args = { span: 2, ...artworkProps };

export const ContentDzCardCol12 = Template.bind({});
ContentDzCardCol12.args = { span: 12, ...contentProps };

export const ContentDzCardCol10 = Template.bind({});
ContentDzCardCol10.args = { span: 10, ...contentProps };

export const ContentDzCardCol6 = Template.bind({});
ContentDzCardCol6.args = { span: [6, 6], ...contentProps };

export const ContentDzCardCol4 = Template.bind({});
ContentDzCardCol4.args = { span: 4, ...contentProps };

export const ContentDzCardCol3 = Template.bind({});
ContentDzCardCol3.args = { span: 3, ...contentProps };

export const ContentDzCardCol2 = Template.bind({});
ContentDzCardCol2.args = { span: 2, ...contentProps };
