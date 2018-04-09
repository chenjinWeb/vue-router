import Vue from 'vue'
import Router from 'vue-router'

import Login from "../pages/login/login.vue"

//home
import Home from "../pages/home/home.vue"
import Profiledata from "../pages/home/profiledata.vue"
import Transaction from "../pages/home/transaction.vue"

//device
import Device from "../pages/device/device.vue"
import Devicema from "../pages/device/devicema.vue"



Vue.use(Router);

const login = [
  {
    name:"login",
    path:"/login",
    component:Login
  }
]

const index=[
  {
    name:"profiledata",
    path:"profiledata",
    component:Profiledata,
    //路由独享
    beforeEnter:(to, from, next)=>{
      //console.info(to);
      //console.info(from);
      next()
    },
    meta:{
      requiresAuth:true
    }
  },
  {
    name:"transaction",
    path:"transaction",
    component:Transaction
  }
]



const home=[
  {
    name:"home",
    path:"/home",
    component:Home,
    children:[
      ...index,
    ]
  }
]

const devicelist=[
  {
    name:'deivecma',
    path:"devicema",
    component:Devicema
  }
]


const device=[
  {
    name:"device",
    path:"/device",
    component:Device,
    children:[
      ...devicelist
    ]
  }
]




const routes = [
  {
    //输入不存在的页面，直接跳到登录页
    path:"*",
    redirect:'/login',
    component:Login
  },
  {
    path:"/",
    redirect:"/login"
  },
  ...login,
  ...home,
  ...device
]

const router = new Router({
  linkActiveClass: 'active',
  routes:routes,
  mode:'history'
})

//全局解析守卫  -  和beforeEach很相似
/*router.beforeResolve((to,from,next)=>{
  console.info(to)
  console.info(from)
  next()
})*/


//全局守卫
/*router.beforeEach((to,from,next)=>{
  console.info(to)  //将要进入的目标 路由对象
  console.info(from)  //当前导航正要离开的路由
  next()
})*/

//全局后置钩子  不需要next函数
/*router.afterEach((to,from)=>{
  console.info(to);
  console.info(from);
})*/


export default router
