import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('../views/LocationView.vue'),
    children: [
      {path: "building1", name: "building1", component: () => import('../components/LocationBuildingComponent.vue')},
      {path: "floor1", name: "b1f1", component:  () => import('../components/LocationFloor1Component.vue')},
      {path: "presSuite", name: "presSuite", component:  () => import('../components/LocationRoomPresSuiteComponent.vue')}
    ]
  },
  {
    path: '/audioOutput',
    name: 'audioOutput',
    component: () => import('../views/AudioOutputView.vue')
  },
  {
    path: '/videoOutput',
    name: 'videoOutput',
    component: () => import('../views/VideoOutputView.vue')
  },
  {
    path: '/controls',
    name: 'controls',
    component: () => import('../views/ControlsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // {
  //   path: '/notFound',
  //   name: 'notFound',
  //   component: NotFoundView
  // },
    // {
  //   path: ':pathMatch(.*)*',
  //   redirect: { name: 'notFound' }
  //   // redirect: "../views/NotFoundView.vue"
  //   // name: 'notFound', component: NotFoundView
  // },
  {
    path: '/:pathMatch(.*)',
    // redirect: { name: 'notFound' }
    name: 'notFound', component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

// router.resolve({
//   name: "notFound",
//   params: { pathMatch: 'notFound' }
// }).href

// router.push({
//   name: "notFound",
//   params: { pathMatch: ['not', 'found'] }
// })

export default router
