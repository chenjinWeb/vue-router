import Vue from 'vue'
import Router from 'vue-router'

import Login from "../pages/login/login.vue"
import Index from "../pages/index/index.vue"
import Device from "../pages/device/device.vue"
import Devicedetail from "../pages/device/devicedetail.vue"
import footer from "../components/footer.vue"


Vue.use(Router);

const login = [
  {
    name:"login",
    path:"/login",
    component:Login
  }
]

const index=[
  /*动态路由配置
  {
    name:"index",
    path:"/index/:id",
    component:Index
  },*/
  {
    name:"index",
    path:"/index",
    components:{
      node:Index,
      footer:footer
    }
  }
]

const device=[
  {
    name:"device",
    path:"/device",
    components:{
      node:Device,
      footer:footer
    },
    children:[
      {
        name:"devicedetail",
        path:"devicedetail",
        component:Devicedetail
      }
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
  ...index,
  ...device
]


const router = new Router({
  routes:routes,
  mode:'hash'
})



export default router
