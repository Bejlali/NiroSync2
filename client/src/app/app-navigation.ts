export const navigation = [

  {
    text: 'Home',
    path: 'home',
    icon: 'home',
  },
  {
    text: 'Sales',
    icon: 'product',
    items: [
      {
        text: 'Products',
        path: '/products',
      },
    ],
  },

  {
    text: 'Test',
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
      {
        text: 'Error Test',
        path: '/test-error',
      },
    ],
  },
];
