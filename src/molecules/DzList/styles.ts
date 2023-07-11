export const styles: any = {
  column: `
    flex
    flex-col
    gap-5
    md:gap-0
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
    hover:text-black-100
    hover:after:rounded-lg
    cursor-pointer
    hover:after:bg-black-60
  `,
  defaultItem: `
    text-black-60
    after:bg-black-20
    hover:text-black-100
    hover:after:rounded-lg
    cursor-pointer
    hover:after:bg-black-60
  `,
  listItem: `
    text-left
    min-w-[2.5438rem]
    pb-5
    relative
    outline-0
    md:outline-transparent
    after:absolute
    after:bottom-0
    after:left-0
    after:block
    after:content-['']
    after:h-[0.1875rem]
    after:w-full
    after:float-left
  `,
  listLink: `
    md:my-2.5
    cursor-pointer
  `,
  linkElement: `
    w-full
    block
  `,
  menu: `
    relative
    w-full
    flex
    flex-col
    gap-10
  `,
  disable: `
    cursor-none
    text-black-40
    after:bg-black-20
  `,
  linkDesktop: `
    md:text-black-60
    md:hover:text-black-100
  `,
};
