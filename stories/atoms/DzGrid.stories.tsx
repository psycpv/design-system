import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzColumn, GridColProps, DzGridColumns } from '../../src/layout/DzGrid';
import { DzModalPopover } from '../../src/atoms/DzModalPopover';
import { cn } from '../../src/utils/classnames';

const TYPES = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

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
interface ExtraProps extends GridColProps {
  type?: string;
}
const Template: Story<ExtraProps> = ({ type }) => {
  if (type === TYPES.DESKTOP) {
    return (
      <DzGridColumns>
        <GridColumnsDebug />
      </DzGridColumns>
    );
  }
  if (type === TYPES.MOBILE || type === TYPES.TABLET) {
    return (
      <div
        className={cn(
          'mx-auto',
          type === TYPES.TABLET ? 'max-w-3xl' : 'max-w-sm'
        )}
      >
        <DzGridColumns>
          <GridColumnsDebug />
        </DzGridColumns>
      </div>
    );
  }
  return (
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

      <DzColumn
        start={[3, 4]}
        span={[8, 2]}
        className="z-10 relative h-[200px] bg-black-20 rounded-sm"
      />

      <DzColumn className="z-10 relative" span={5} start={8}>
        <DzModalPopover
          title="Modal Popover"
          description="Modal Description"
          primaryBtnText="Click me"
        />
      </DzColumn>
    </DzGridColumns>
  );
};

export const DesktopDzGrid = Template.bind({});
DesktopDzGrid.args = { type: TYPES.DESKTOP };

export const TabletDzGrid = Template.bind({});
TabletDzGrid.args = { type: TYPES.TABLET };

export const MobileDzGrid = Template.bind({});
MobileDzGrid.args = { type: TYPES.MOBILE };

export const RealUseCase = Template.bind({});
RealUseCase.args = {};
