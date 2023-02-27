import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzColumn, GridColProps, DzGridColumns } from '../src/layout/DzGrid';
import { DzModalPopover } from '../src/atoms/DzModalPopover';

const meta: Meta = {
  title: 'Layout/Grid/DzGrid',
  component: DzGridColumns,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const GridColumnsDebug = () => (
  <DzGridColumns
    position="absolute"
    className="absolute top-0 left-0 w-full h-full pointer-events-none gap-5"
  >
    {Array.from(Array(12)).map((_, i) => (
      <DzColumn
        className="z-0 bg-black-10 border border-black-20 h-full"
        key={i}
        span={[1]}
      />
    ))}
  </DzGridColumns>
);

const Template: Story<GridColProps> = args => (
  <DzGridColumns>
    <GridColumnsDebug />
    <DzColumn className="z-10 relative" span={2} start={5}>
      <DzModalPopover
        title="Modal Popover"
        description="Modal Description"
        primaryBtnText="Click me"
      />
    </DzColumn>

    <DzColumn className="z-10 relative" span={6}>
      <DzModalPopover
        title="Modal Popover"
        description="Modal Description"
        primaryBtnText="Click me"
      />
    </DzColumn>

    <DzColumn className="z-10 relative" span={5} start={8}>
      <DzModalPopover
        title="Modal Popover"
        description="Modal Description"
        primaryBtnText="Click me"
      />
    </DzColumn>
    <DzColumn
      start={[3, 4]}
      span={[8, 2]}
      className="z-10 relative h-[200px] bg-black-20 rounded-sm"
    />
  </DzGridColumns>
);

export const PrimaryDzGrid = Template.bind({});
PrimaryDzGrid.args = {};
