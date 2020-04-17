import Vue from 'vue'
import Router from 'vue-router'
import Model from '@/components/model'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Model',
    component: Model
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
