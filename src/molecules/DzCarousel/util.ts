export const OFFSET_AFTER = 20;
export const OFFSET_BEFORE = 20;

/**
 * 12-col grid simulation since slider works with a block display.
 *
 * Element's width is described by the following expresion:
 *
 *    i
 *  ----- * (100% - (OFFSET) + GUTTER) - GUTTER
 *   12
 *
 * where
 * 100%: Total width of the parent container
 * i: element's span. It might have values from 1 to 12.
 * OFFSET: Carousel total offset (OFFSET_BEFORE + OFFSET_AFTER)
 * GUTTER: Spacing between columns in the design system
 *
 *
 * PD: Values are hard-coded because Tailwind JIT compiler cannot generate classes from dynamic strings
 *  */
export const gridColsMaxWidths = {
  1: `max-w-[calc(0.0833*(100%-40px+1.25rem)-1.25rem)]`,
  2: `max-w-[calc(0.1667*(100%-40px+1.25rem)-1.25rem)]`,
  3: `max-w-[calc(0.2500*(100%-40px+1.25rem)-1.25rem)]`,
  4: `max-w-[calc(0.3333*(100%-40px+1.25rem)-1.25rem)]`,
  5: `max-w-[calc(0.4167*(100%-40px+1.25rem)-1.25rem)]`,
  6: `max-w-[calc(0.5000*(100%-40px+1.25rem)-1.25rem)]`,
  7: `max-w-[calc(0.5833*(100%-40px+1.25rem)-1.25rem)]`,
  8: `max-w-[calc(0.6667*(100%-40px+1.25rem)-1.25rem)]`,
  9: `max-w-[calc(0.7500*(100%-40px+1.25rem)-1.25rem)]`,
  10: `max-w-[calc(0.8333*(100%-40px+1.25rem)-1.25rem)]`,
  11: `max-w-[calc(0.9167*(100%-40px+1.25rem)-1.25rem)]`,
  12: `max-w-[calc(1.0000*(100%-40px+1.25rem)-1.25rem)]`,
};
