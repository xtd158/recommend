export default [
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/test',
  //   name: 'test',
  //   icon: 'smile',
  //   component: './Test',
  // },
  {
    path: '/editor',
    name: '编辑页',
    icon: 'smile',
    component: './Editor',
  },
  {
    path: '/tags',
    name: '标签管理',
    icon: 'smile',
    component: './Tags',
  },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
