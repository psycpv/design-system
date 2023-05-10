export const menuData = {
  items: [
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
      mobileEnabled: false,
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
      mobileEnabled: false,
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
                  desktopEnabled: true,
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
  ],
};
