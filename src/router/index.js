import Vue from 'vue'
import VueRouter from 'vue-router'
import Editor from '../views/Editor.vue'
import Community from '../views/Community.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/editor',
    alias:'/',
    name: 'Editor',
    component: Editor,
    meta: {
      title: 'Editor de Código',
      icon: 'xml',
      inDrawer: 1
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      title: 'Comunidade',
      icon: 'account-group',
      inDrawer: 2
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
