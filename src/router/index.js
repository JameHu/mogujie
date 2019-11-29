import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// home
const Home = ()=> import('view/Home')
const Detail = ()=> import('view/Home/detail')

// shop
const Shop = ()=> import('view/Shop')

// my
const My = ()=> import('view/My')

//cat
const Cat = ()=> import('view/Cat')


let routes = [
  {path:'',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/detail',component:Detail},
  {path:'/shop',component:Shop},
  {path:'/my',component:My},
  {path:'/cat',component:Cat},
];

const router = new Router({
  routes,
  mode:'history'
})


export default router;