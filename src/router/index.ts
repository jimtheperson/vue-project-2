import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from "../views/LocationView.vue";
import AudioOutputView from "../views/AudioOutputView.vue";
import VideoOutputView from "../views/VideoOutputView.vue";
import AboutView from '../views/AboutView.vue'
import ControlsView from "../views/ControlsView.vue";
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    {
      path: '/audioOutput',
      name: 'audioOutput',
      component: AudioOutputView
    },
    {
      path: '/videoOutput',
      name: 'videoOutput',
      component: VideoOutputView
    },
    {
      path: '/controls',
      name: 'controls',
      component: ControlsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathmatch(.*)',
      component: NotFoundView
    }
  ]
})

export default router
