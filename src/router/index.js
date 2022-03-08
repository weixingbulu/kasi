import Vue from 'vue'
import VueRouter from 'vue-router'


let Home = ()=> import('../views/Home')
let About = ()=>import('../views/About')
let AboutOne = ()=>import('../components/about/aboutone')
let HomeOne = ()=>import('../components/home/homeone')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/home/homeone',
        name:'HomeOne',
        component:HomeOne
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:About,
    children:[
      {
        path:'/about/aboutone',
        name:'AboutOne',
        component:AboutOne
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
