
export default {
  name: 'MenuDrawer',
  data() {
    return {
      drawer: null,
      links: [
        {
          icon: 'view-dashboard-variant',
          name: 'Dashboard',
          link: '/',
        },
        {
          icon: 'playlist-music',
          name: 'List',
          link: '/list',
        },
        {
          icon: 'led-outline',
          name: 'About',
          link: '/about',
        },
      ],
    };
  },
};
