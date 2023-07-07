export const styles: any = {
  column: `
    flex
    flex-col
    gap-5
    md:gap-2.5
  `,
  menuList: `
    flex
    max-w-full
    overflow-x-auto
    scrollbar
    scrollbar-none
    sticky
    bg-white-100
    z-40
  `,
  activeItem: `
    after:bg-black-60
    text-black-100
  `,
  defaultItem: `
    text-black-60
    after:bg-black-20
  `,
  listItem: `
    text-left
    min-w-[2.5438rem]
    pb-5
    cursor-pointer
    relative
    outline-0
    md:outline-transparent
    hover:text-black-100
    focus:text-black-100
    after:absolute
    after:bottom-0
    after:left-0
    after:block
    after:content-['']
    after:h-[0.1875rem]
    after:w-full
    after:float-left
    hover:after:rounded-lg
    hover:after:bg-black-60
    focus:after:bg-black-60
  `,
  listLink: `
    cursor-pointer
  `,
  menu: `
    relative
    w-full
    flex
    flex-col
    gap-10
  `,
};
