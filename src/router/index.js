import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginComponent from '@/components/account/login.component.vue'
import RegisterComponent from '@/components/account/register.component.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name: 'login',
      path: '/login',
      component: LoginComponent
    },
    {
      name: 'register',
      path: '/register',
      component: RegisterComponent
    }
  ]
})
