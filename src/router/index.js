import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Community from '../views/Community.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Editor de Código',
      icon: 'xml',
      inDrawer: 1
    }
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project,
    props: true,
    meta: {
      title: 'Projeto',
      icon: 'xml',
      inDrawer: false
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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile',
      icon: 'face-profile',
      inDrawer: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
