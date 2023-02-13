
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
<<<<<<< HEAD
      { path: 'Fish', component: () => import('pages/Fish.vue') },
      { path: 'Ocean', component: () => import('pages/Ocean.vue') }
=======
      { path: 'login', component: () => import('src/pages/login.vue') },
      { path: 'signup', component: () => import('src/pages/signup.vue') }
      
>>>>>>> 44579b83d03b07cf94b2a72741a01b3646da071b
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
