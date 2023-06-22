export const styles: any = {
  artwork: {
    infoContainer: `
        flex-col
        flex
        justify-between
        gap-5
        md:@4col/cardContainer:flex-row
        md:@4col/cardContainer:-mt-2.5
        md:@6col/cardContainer:mt-0
      `,
    leftPanel: `
        flex
        flex-col
        basis-1/2
        @6colMbl/cardContainer:gap-2.5
        md:@2col/cardContainer:gap-2.5
        md:@3col/cardContainer:gap-2.5
        md:@4col/cardContainer:gap-2.5
      `,
    artistName: `
        @6colMbl/cardContainer:text-sm
        @12colMbl/cardContainer:text-md
        md:@4col/cardContainer:text-md
        md:@10col/cardContainer:text-lg
      `,
    rightPanel: `
        mt-5
        flex
        flex-col
        gap-5
        md:@4col/cardContainer:m-0
        md:@4col/cardContainer:min-w-[13.5625rem]
      `,
    artWorkTitle: `
        @6colMbl/cardContainer:text-sm
        @12colMbl/cardContainer:text-md
        md:@4col/cardContainer:text-md
        md:@10col/cardContainer:text-lg
        italic
      `,
    artworkYear: `
        @6colMbl/cardContainer:text-sm
        @12colMbl/cardContainer:text-md
        md:@4col/cardContainer:text-md
        md:@10col/cardContainer:text-lg
        uppercase
      `,
    tombstoneText: `
        text-black-60
        whitespace-pre-wrap
      `,
    priceTitle: `
        @6colMbl/cardContainer:text-md
        md:@2col/cardContainer:text-sm
        md:@4col/cardContainer:text-md
      `,
  },
  mediaImg: `
      !bg-black-20
      @6colMbl/cardContainer:min-h-[12.5rem]
      @12colMbl/cardContainer:min-h-[22.5rem]
      md:@2col/cardContainer:min-h-[15rem]
      md:@3col/cardContainer:min-h-[18.75rem]
      md:@4col/cardContainer:min-h-[22.5rem]
      md:@6col/cardContainer:min-h-[33.75rem]
      md:@10col/cardContainer:min-h-[45rem]
      md:@12col/cardContainer:min-h-[51.25rem]
    `,
  mediaZoom: `
      md:hover:@2col/cardContainer:scale-[1.03]
      md:hover:@12col/cardContainer:scale-100
      ease-in duration-300
    `,
  cardContainer: `
      @container/cardContainer
      w-full
      flex
      flex-col
      gap-2.5
      md:@6col:gap-5 
    `,
  buttons: `
      @12colMbl/cardContainer:py-[0.8125rem]
      @12colMbl/cardContainer:px-[1.5625rem]
      md:@2col/cardContainer:py-[0.3125rem]
      md:@2col/cardContainer:px-[1.5625rem]
      md:@3col/cardContainer:py-[0.8125rem]
      md:@3col/cardContainer:px-[1.5625rem]
    `,
};
