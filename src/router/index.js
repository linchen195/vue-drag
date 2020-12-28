
import Vue from 'vue'
import VueRouter from 'vue-router'
import StaticRoutes from './routes'

Vue.use(VueRouter)

const routes = StaticRoutes

const router = new VueRouter({
  routes
})

export default router
