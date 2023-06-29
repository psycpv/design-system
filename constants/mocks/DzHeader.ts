export const menuData = {
  items: [
    {
      title: 'Artists',
      newTab: false,
      desktopEnabled: true,
      mobileEnabled: true,
      _type: 'menuItemLink',
      link: '/artists',
    },
    {
      _type: 'menuItemSubmenu',
      title: 'Exhibitions',
      mobileEnabled: true,
      desktopEnabled: true,
      rootLink: [
        {
          title: 'Exhibition',
          newTab: false,
          desktopEnabled: true,
          mobileEnabled: true,
          _type: 'menuItemLink',
          link: '/exhibition',
        },
      ],
      submenu: {
        _type: 'menu',
        items: [
          {
            _type: 'menuItemPage',
            title: 'Tomma',
            newTab: true,
            desktopEnabled: true,
            mobileEnabled: true,
            page: {
              url: '/exhibitions/tomma',
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
            _type: 'menuItemPage',
            title: 'Available Artworks',
            newTab: true,
            desktopEnabled: true,
            mobileEnabled: true,
            anchor: 'available-artworks',
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
      _type: 'menuItemSubmenu',
      title: 'ExtraNested',
      mobileEnabled: true,
      desktopEnabled: true,
      rootLink: [
        {
          _type: 'menuItemPage',
          title: 'Tomma',
          newTab: true,
          desktopEnabled: true,
          mobileEnabled: true,
          page: {
            url: '/exhibitions/tomma',
          },
        },
      ],
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
        ],
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
  ],
};
