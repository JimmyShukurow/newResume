import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import ProfileView from '../views/ProfileView.vue'
import ResumeView from '../views/ResumeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  }
]

const router = new VueRouter({
  routes
})

export default router
