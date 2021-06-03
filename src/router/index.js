import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Login from '../views/auth/Login.vue'
import Transactions from '../views/dashboard/Transactions.vue'
import Withdraw from '../views/dashboard/Withdraw.vue'
import Users from '../views/dashboard/Users.vue'
import Agents from '../views/dashboard/Agents.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/agets',
    name: 'Agents',
    component: Agents
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, from, next){
  if (to.name !== 'Login'){
    if (!store.getters['token']){
      next({ name: 'Login' })
      return
    }
  }
  next()
});

export default router
