export default {
  name: 'MenuDrawer',
  data() {
    return {
      drawer: true,
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
          icon: 'star',
          name: 'Favorites',
          link: '/favorites',
        },
        {
          icon: 'led-outline',
          name: 'About',
          link: '/about',
        },
      ],
      mini: true,
    };
  },
};
