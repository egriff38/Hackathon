import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Browse from '@/components/Browse'
import iPhone from '@/components/iPhone'
import checkout from '@/components/checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Browse',
      name: 'Browse items',
      component: Browse
    },
    {
      path: '/products/iPhone',
      name: 'iPhone',
      component: iPhone
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    }
  ]
})
