export const navigation = [
  {
    text: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    text: 'Sales',
    icon: 'product',
    path: '',
    items: [
      {
        text: 'Products',
        path: '/shop',
      },
    ],
  },

  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile',
      },
      {
        text: 'Tasks',
        path: '/tasks',
      },
    ],
  },
];
