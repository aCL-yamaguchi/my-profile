import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Photo from '@/components/Photo'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/photo',
      name: 'PHOTO',
      component: Photo
    },
    {
      path: '/contact',
      name: 'CONTACT',
      component: Contact
    }
  ]
})
