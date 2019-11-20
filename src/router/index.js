import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=> import('view/Home')
const Shop = ()=> import('view/Shop')
const My = ()=> import('view/My')
const Cat = ()=> import('view/Cat')



let routes = [
  {path:'',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/shop',component:Shop},
  {path:'/my',component:My},
  {path:'/cat',component:Cat},
];

const router = new Router({
  routes,
  mode:'history'
})

export default router;