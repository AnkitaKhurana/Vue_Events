import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: Home
    },
    {
      path: '/events',
      name: 'events',  
      props: true,  
      component: () => import(/* webpackChunkName: "event" */ './views/Events.vue')
    },
    {
      path: '/event/:id',
      name: 'event',  
      props: true,  
      component: () => import(/* webpackChunkName: "event" */ './views/Event.vue')
    }
  ]
})
