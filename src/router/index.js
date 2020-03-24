import Vue from 'vue'
import VueRouter from 'vue-router'

import shouzi from '../views/shouzi'
import xinxiliu from '../views/xinxiliu'
import biaodan from '../views/biaodan'
import shiti from '../views/shiti'
import huodong from '../views/huodong'
import sz_biaodan from '../views/sz_biaodan'
import cooperation from '../views/cooperation'
import weekdata from '../views/weekdata'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/biaodan'},
  { path: '/shouzi', component: shouzi},
  { path: '/xinxiliu', component: xinxiliu},
  { path: '/biaodan', component: biaodan},
  { path: '/shiti', component: shiti},
  { path: '/huodong', component: huodong},
  { path: '/sz_biaodan', component: sz_biaodan},
  { path: '/cooperation', component: cooperation},
  { path: '/weekdata', component: weekdata}
]

const router = new VueRouter({
  routes
})

export default router
