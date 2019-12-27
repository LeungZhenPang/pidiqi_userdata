import Vue from 'vue'
import VueRouter from 'vue-router'

import shouzi from '../views/shouzi'
import xinxiliu from '../views/xinxiliu'
import biaodan from '../views/biaodan'
import shiti from '../views/shiti'
import huodong from '../views/huodong'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/biaodan'},
  { path: '/shouzi', component: shouzi},
  { path: '/xinxiliu', component: xinxiliu},
  { path: '/biaodan', component: biaodan},
  { path: '/shiti', component: shiti},
  { path: '/huodong', component: huodong}
]

const router = new VueRouter({
  routes
})

export default router
