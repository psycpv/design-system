const commonMenu = [
  {
    title: 'Artists',
    newTab: true,
    desktopEnabled: true,
    mobileEnabled: true,
    _type: 'menuItemLink',
    link: 'https://www.davidzwirner.com/artists',
  },
  {
    _type: 'menuItemSubmenu',
    title: 'Exhibitions',
    itemLink: {
      title: 'Books',
      newTab: true,
      desktopEnabled: true,
      mobileEnabled: true,
      _type: 'menuItemLink',
      link: 'https://www.davidzwirnerbooks.com/',
    },
    mobileEnabled: true,
    desktopEnabled: true,
    submenu: {
      _type: 'menu',
      items: [
        {
          _type: 'menuItemPage',
          title: 'Tomma',
          newTab: true,
          desktopEnabled: true,
          mobileEnabled: true,
          anchor: 'tomma-hero',
          page: {
            url: 'gordon-matta-clark-and-pope-l-impossible-failures',
          },
        },
        {
          _type: 'menuItemPage',
          title: 'Maia',
          newTab: true,
          desktopEnabled: true,
          mobileEnabled: true,
          anchor: 'maia-test',
          page: {
            url: 'gordon-matta-clark-and-pope-l-impossible-failures',
          },
        },
      ],
    },
  },
  {
    _type: 'menuItemPage',
    title: 'Maia',
    newTab: true,
    desktopEnabled: true,
    mobileEnabled: true,
    anchor: 'maia-test',
    page: {
      url: 'gordon-matta-clark-and-pope-l-impossible-failures',
    },
  },
  {
    title: 'Books',
    newTab: true,
    desktopEnabled: true,
    mobileEnabled: true,
    _type: 'menuItemLink',
    link: 'https://www.davidzwirnerbooks.com/',
  },
  {
    title: 'Search',
    newTab: true,
    desktopEnabled: true,
    mobileEnabled: true,
    _type: 'menuItemLink',
    link: 'https://www.davidzwirner.com/search',
  },
  {
    _type: 'menuItemSubmenu',
    title: 'ExtraNested',
    mobileEnabled: true,
    desktopEnabled: true,
    submenu: {
      _type: 'menu',
      items: [
        {
          title: 'Nested Search',
          newTab: true,
          desktopEnabled: true,
          mobileEnabled: true,
          _type: 'menuItemLink',
          link: 'https://www.davidzwirner.com/search',
        },
        {
          title: 'Nested',
          desktopEnabled: true,
          mobileEnabled: true,
          _type: 'menuItemSubmenu',
          submenu: {
            _type: 'menu',
            items: [
              {
                newTab: true,
                desktopEnabled: false,
                mobileEnabled: true,
                _type: 'menuItemLink',
                link: 'http://localhost:3333/vision',
                title: 'Menu',
              },
            ],
          },
        },
      ],
    },
  },
];
export const menuData = {
  desktop: {
    items: commonMenu,
  },
  mobile: {
    items: commonMenu.slice(0, 4),
  },
};

export const socialMedia = {
  _type: 'social',
  weChat: 'https://www.davidzwirner.com/wechat',
  instagram: 'https://www.instagram.com/davidzwirner/',
  twitter: 'https://twitter.com/davidzwirner',
  facebook: 'https://www.facebook.com/davidzwirner',
};
