// const routes = [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'About',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     }
//   ]
let index = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]
export default [
    {
      path: '',
      component: () => import('../views/Home.vue'),
      children: [
        // {
        // //   path: '',
        // //   // 默认
        // //   component: () => import('@/page/home/index.vue'),
        // //   meta: {
        // //     requireAuth: true
        // //   }
        // },
        // ...index
      ]
    },
    {
      path: '/About',
    //   component: () => import('@/page/home/sub/sub.vue'),
      component: () => import('@/views/About.vue'),
    //   children: [...sub]
    },
    // ...login
  ]
  