import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ResumeView from '../views/ResumeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
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
