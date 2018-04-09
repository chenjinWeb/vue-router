<template>
  <div>

    <div class="frame-top" id="topView">
      <div class="logo fl">
        <img src="../../assets/img/logo.png"/>
      </div>
    </div>

    <!--菜单导航-->
    <div class="frame_menu">
      <ul>
        <li v-for="m in menuList" :class="{'active':routerUrl==m.code}">
          <router-link :to="m.href">{{m.name}}</router-link>
        </li>
      </ul>
    </div>

    <div class="info">
      <div class="frame-top-setting">
        <div class="hover-div">
          <div class="frame-top-setting-name">
            <p class="user">
              <span id="userName">你好,{{userInfo.userName}}</span>
            </p>
          </div>
          <i class="yc-icon frame-top-setting-icon2">&#xe637;</i>
        </div>
        <div class="frame-top-setting-list">
          <a href="javascript:void (0)" id="loginOut" @click="userQuit()"><i class="yc-icon">&#xe792;</i> 退出登录</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="leftsidebar_box">
        <ul v-for="m in menuList" v-if="routerUrl==m.code">
          <li v-for="r in m.childList">
            <span><i class="anticon anticon-mail">{{r.name}}</i></span>
            <router-link style="text-decoration: none;" :to="c.href" v-for="c in r.childList" :key="c.id">{{c.name}}</router-link>
          </li>
        </ul>

      </div>

    </div>

    <div class="frame-main">

      <router-view></router-view>

    </div>

  </div>

</template>

<script>

  import {mapState,mapActions} from "vuex"

  export default {
    name: "home",
    data() {
      return {
        menuList:[],
        userInfo:{},
        routerUrl:""
      }
    },
    computed: {

    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "routeChange"
    },
    methods: {
      ...mapActions([
        "navApi_",
        "userInfo_"
      ]),
      //监听路由变化
      routeChange(){
        this.routerUrl = this.$route.path.split("/")[1];
        console.info(this.$route)
        console.info('路由变化了')
      },
      getLists(){
        this.navApi_().then((res)=>{
          if(res.success==200){
            res.data.data=[
              {
                "id": 3209,
                "code": "home",
                "name": "首页",
                "href": "/home/profiledata",
                "icon": null,
                "parentId": 0,
                "childList": [
                  {
                  "id": 3210,
                  "code": null,
                  "name": "数据概况",
                  "href": "/home/profiledata",
                  "icon": null,
                  "parentId": 3209,
                  "childList": [{
                    "id": 3211,
                    "code": null,
                    "name": "数据概况",
                    "href": "/home/profiledata",
                    "icon": null,
                    "parentId": 3210,
                    "childList": [{
                      "id": 3217,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3211,
                      "childList": null
                    }]
                  }]
                },
                  {
                  "id": 3212,
                  "code": null,
                  "name": "交易管理",
                  "href": "/",
                  "icon": null,
                  "parentId": 3209,
                  "childList": [{
                    "id": 3352,
                    "code": null,
                    "name": "微信支付宝平台交易记录",
                    "href": "/home/trading",
                    "icon": null,
                    "parentId": 3212,
                    "childList": null
                  }, {
                    "id": 3213,
                    "code": null,
                    "name": "交易记录",
                    "href": "/home/transaction",
                    "icon": null,
                    "parentId": 3212,
                    "childList": [{
                      "id": 3218,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3213,
                      "childList": null
                    }]
                  }, {
                    "id": 3214,
                    "code": null,
                    "name": "交易汇总",
                    "href": "/home/transall",
                    "icon": null,
                    "parentId": 3212,
                    "childList": [{
                      "id": 3219,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3214,
                      "childList": null
                    }]
                  }]
                },
                  {
                  "id": 3215,
                  "code": null,
                  "name": "运营监控管理",
                  "href": "/",
                  "icon": null,
                  "parentId": 3209,
                  "childList": [{
                    "id": 3358,
                    "code": null,
                    "name": "签到列表",
                    "href": "/home/signed",
                    "icon": null,
                    "parentId": 3215,
                    "childList": [{
                      "id": 3359,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3358,
                      "childList": null
                    }, {
                      "id": 3360,
                      "code": null,
                      "name": "查看签到历史",
                      "href": "/",
                      "icon": null,
                      "parentId": 3358,
                      "childList": null
                    }]
                  }, {
                    "id": 3216,
                    "code": null,
                    "name": "报警监控",
                    "href": "/home/monitor",
                    "icon": null,
                    "parentId": 3215,
                    "childList": [{
                      "id": 3220,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3216,
                      "childList": null
                    }]
                  }, {
                    "id": 3361,
                    "code": null,
                    "name": "补货管理",
                    "href": "/home/replenishment",
                    "icon": null,
                    "parentId": 3215,
                    "childList": [{
                      "id": 3362,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3361,
                      "childList": null
                    }]
                  }, {
                    "id": 3345,
                    "code": null,
                    "name": "货道变更",
                    "href": "/home/aislechange",
                    "icon": null,
                    "parentId": 3215,
                    "childList": [{
                      "id": 3346,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3345,
                      "childList": null
                    }, {
                      "id": 3347,
                      "code": null,
                      "name": "导出报表",
                      "href": "/",
                      "icon": null,
                      "parentId": 3345,
                      "childList": null
                    }, {
                      "id": 3348,
                      "code": null,
                      "name": "同步",
                      "href": "/",
                      "icon": null,
                      "parentId": 3345,
                      "childList": null
                    }]
                  }]
                }
                ]
              },
              {
                "id": 3245,
                "code": "device",
                "name": "设备管理",
                "href": "/device/devicema",
                "icon": null,
                "parentId": 0,
                "childList": [{
                  "id": 3246,
                  "code": null,
                  "name": "设备管理",
                  "href": "/",
                  "icon": null,
                  "parentId": 3245,
                  "childList": [{
                    "id": 3355,
                    "code": null,
                    "name": "点位管理",
                    "href": "/device/locationma",
                    "icon": null,
                    "parentId": 3246,
                    "childList": [{
                      "id": 3356,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3355,
                      "childList": null
                    }, {
                      "id": 3357,
                      "code": null,
                      "name": "审核",
                      "href": "/",
                      "icon": null,
                      "parentId": 3355,
                      "childList": null
                    }]
                  }, {
                    "id": 3247,
                    "code": null,
                    "name": "售卖机管理",
                    "href": "/device/devicema",
                    "icon": null,
                    "parentId": 3246,
                    "childList": [{
                      "id": 3250,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }, {
                      "id": 3251,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }, {
                      "id": 3252,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }, {
                      "id": 3253,
                      "code": null,
                      "name": "禁用启用",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }, {
                      "id": 3254,
                      "code": null,
                      "name": "货道商品监控",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }, {
                      "id": 3255,
                      "code": null,
                      "name": "导入设备",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }, {
                      "id": 3256,
                      "code": null,
                      "name": "导出报表",
                      "href": "/",
                      "icon": null,
                      "parentId": 3247,
                      "childList": null
                    }]
                  }, {
                    "id": 3248,
                    "code": null,
                    "name": "售卖机分组",
                    "href": "/device/devicegroup",
                    "icon": null,
                    "parentId": 3246,
                    "childList": [{
                      "id": 3311,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }, {
                      "id": 3327,
                      "code": null,
                      "name": "配置广告",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }, {
                      "id": 3328,
                      "code": null,
                      "name": "投放广告",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }, {
                      "id": 3257,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }, {
                      "id": 3258,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }, {
                      "id": 3259,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }, {
                      "id": 3260,
                      "code": null,
                      "name": "归属机器",
                      "href": "/",
                      "icon": null,
                      "parentId": 3248,
                      "childList": null
                    }]
                  }, {
                    "id": 3249,
                    "code": null,
                    "name": "货道模板管理",
                    "href": "/device/deviceaisle",
                    "icon": null,
                    "parentId": 3246,
                    "childList": [{
                      "id": 3312,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3249,
                      "childList": null
                    }, {
                      "id": 3313,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3249,
                      "childList": null
                    }, {
                      "id": 3314,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3249,
                      "childList": null
                    }, {
                      "id": 3315,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3249,
                      "childList": null
                    }, {
                      "id": 3316,
                      "code": null,
                      "name": "批量配置售卖机模板",
                      "href": "/",
                      "icon": null,
                      "parentId": 3249,
                      "childList": null
                    }]
                  }]
                }, {
                  "id": 3331,
                  "code": null,
                  "name": "设备控制",
                  "href": "/",
                  "icon": null,
                  "parentId": 3245,
                  "childList": [{
                    "id": 3332,
                    "code": null,
                    "name": "售卖机控制",
                    "href": "/device/control",
                    "icon": null,
                    "parentId": 3331,
                    "childList": [{
                      "id": 3333,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3332,
                      "childList": null
                    }, {
                      "id": 3334,
                      "code": null,
                      "name": "升级",
                      "href": "/",
                      "icon": null,
                      "parentId": 3332,
                      "childList": null
                    }, {
                      "id": 3335,
                      "code": null,
                      "name": "查看历史下发",
                      "href": "/",
                      "icon": null,
                      "parentId": 3332,
                      "childList": null
                    }]
                  }, {
                    "id": 3336,
                    "code": null,
                    "name": "程序更新",
                    "href": "/device/program",
                    "icon": null,
                    "parentId": 3331,
                    "childList": [{
                      "id": 3338,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3336,
                      "childList": null
                    }, {
                      "id": 3339,
                      "code": null,
                      "name": "新增/编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3336,
                      "childList": null
                    }, {
                      "id": 3340,
                      "code": null,
                      "name": "发布",
                      "href": "/",
                      "icon": null,
                      "parentId": 3336,
                      "childList": null
                    }, {
                      "id": 3341,
                      "code": null,
                      "name": "历史版本",
                      "href": "/",
                      "icon": null,
                      "parentId": 3336,
                      "childList": null
                    }, {
                      "id": 3342,
                      "code": null,
                      "name": "机器",
                      "href": "/",
                      "icon": null,
                      "parentId": 3336,
                      "childList": null
                    }]
                  }, {
                    "id": 3337,
                    "code": null,
                    "name": "下发列表",
                    "href": "/device/issued",
                    "icon": null,
                    "parentId": 3331,
                    "childList": [{
                      "id": 3343,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3337,
                      "childList": null
                    }]
                  }]
                }, {
                  "id": 3304,
                  "code": null,
                  "name": "外部设备管理",
                  "href": "/",
                  "icon": null,
                  "parentId": 3245,
                  "childList": [{
                    "id": 3305,
                    "code": null,
                    "name": "外部设备管理",
                    "href": "/device/deviceouter",
                    "icon": null,
                    "parentId": 3304,
                    "childList": [{
                      "id": 3310,
                      "code": null,
                      "name": "导出报表",
                      "href": "/",
                      "icon": null,
                      "parentId": 3305,
                      "childList": null
                    }, {
                      "id": 3306,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3305,
                      "childList": null
                    }, {
                      "id": 3307,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3305,
                      "childList": null
                    }, {
                      "id": 3308,
                      "code": null,
                      "name": "导入设备",
                      "href": "/",
                      "icon": null,
                      "parentId": 3305,
                      "childList": null
                    }, {
                      "id": 3309,
                      "code": null,
                      "name": "添加销售数据",
                      "href": "/",
                      "icon": null,
                      "parentId": 3305,
                      "childList": null
                    }]
                  }]
                }]
              },
              {
                "id": 3239,
                "code": "good",
                "name": "货品管理",
                "href": "/good/goodcenter",
                "icon": null,
                "parentId": 0,
                "childList": [{
                  "id": 3350,
                  "code": null,
                  "name": "盘点管理",
                  "href": "/good/inventory",
                  "icon": null,
                  "parentId": 3239,
                  "childList": [{
                    "id": 3351,
                    "code": null,
                    "name": "盘点管理",
                    "href": "/good/inventory",
                    "icon": null,
                    "parentId": 3350,
                    "childList": null
                  }]
                }, {
                  "id": 3353,
                  "code": null,
                  "name": "仓库管理",
                  "href": "/good/warehousemanage",
                  "icon": null,
                  "parentId": 3239,
                  "childList": [{
                    "id": 3354,
                    "code": null,
                    "name": "仓库管理",
                    "href": "/good/warehousemanage",
                    "icon": null,
                    "parentId": 3353,
                    "childList": null
                  }]
                }, {
                  "id": 3240,
                  "code": null,
                  "name": "商品中心",
                  "href": "/",
                  "icon": null,
                  "parentId": 3239,
                  "childList": [{
                    "id": 3241,
                    "code": null,
                    "name": "商品中心",
                    "href": "/good/goodcenter",
                    "icon": null,
                    "parentId": 3240,
                    "childList": [{
                      "id": 3244,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3241,
                      "childList": null
                    }, {
                      "id": 3321,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3241,
                      "childList": null
                    }, {
                      "id": 3322,
                      "code": null,
                      "name": "禁用",
                      "href": "/",
                      "icon": null,
                      "parentId": 3241,
                      "childList": null
                    }, {
                      "id": 3323,
                      "code": null,
                      "name": "查看正在售卖",
                      "href": "/",
                      "icon": null,
                      "parentId": 3241,
                      "childList": null
                    }, {
                      "id": 3324,
                      "code": null,
                      "name": "查看售卖历史",
                      "href": "/",
                      "icon": null,
                      "parentId": 3241,
                      "childList": null
                    }, {
                      "id": 3325,
                      "code": null,
                      "name": "导出",
                      "href": "/",
                      "icon": null,
                      "parentId": 3241,
                      "childList": null
                    }]
                  }, {
                    "id": 3242,
                    "code": null,
                    "name": "商品类型维护",
                    "href": "/good/goodtype",
                    "icon": null,
                    "parentId": 3240,
                    "childList": [{
                      "id": 3243,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3242,
                      "childList": null
                    }, {
                      "id": 3326,
                      "code": null,
                      "name": "添加编辑删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3242,
                      "childList": null
                    }]
                  }]
                }]
              },
              {
                "id": 3261,
                "code": "setting",
                "name": "设置",
                "href": "/setting/alipay",
                "icon": null,
                "parentId": 0,
                "childList": [{
                  "id": 3262,
                  "code": null,
                  "name": "设置",
                  "href": "/",
                  "icon": null,
                  "parentId": 3261,
                  "childList": [{
                    "id": 3263,
                    "code": null,
                    "name": "支付宝管理",
                    "href": "/setting/alipay",
                    "icon": null,
                    "parentId": 3262,
                    "childList": [{
                      "id": 3268,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3263,
                      "childList": null
                    }, {
                      "id": 3269,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3263,
                      "childList": null
                    }, {
                      "id": 3270,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3263,
                      "childList": null
                    }, {
                      "id": 3271,
                      "code": null,
                      "name": "同步",
                      "href": "/",
                      "icon": null,
                      "parentId": 3263,
                      "childList": null
                    }, {
                      "id": 3272,
                      "code": null,
                      "name": "绑定分组",
                      "href": "/",
                      "icon": null,
                      "parentId": 3263,
                      "childList": null
                    }, {
                      "id": 3273,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3263,
                      "childList": null
                    }]
                  }, {
                    "id": 3264,
                    "code": null,
                    "name": "微信支付管理",
                    "href": "/setting/wechat",
                    "icon": null,
                    "parentId": 3262,
                    "childList": [{
                      "id": 3277,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3264,
                      "childList": null
                    }, {
                      "id": 3275,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3264,
                      "childList": null
                    }, {
                      "id": 3278,
                      "code": null,
                      "name": "同步",
                      "href": "/",
                      "icon": null,
                      "parentId": 3264,
                      "childList": null
                    }, {
                      "id": 3276,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3264,
                      "childList": null
                    }, {
                      "id": 3279,
                      "code": null,
                      "name": "绑定分组",
                      "href": "/",
                      "icon": null,
                      "parentId": 3264,
                      "childList": null
                    }, {
                      "id": 3274,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3264,
                      "childList": null
                    }]
                  }, {
                    "id": 3265,
                    "code": null,
                    "name": "设备厂商管理",
                    "href": "/setting/factory",
                    "icon": null,
                    "parentId": 3262,
                    "childList": [{
                      "id": 3280,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3265,
                      "childList": null
                    }, {
                      "id": 3281,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3265,
                      "childList": null
                    }, {
                      "id": 3282,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3265,
                      "childList": null
                    }, {
                      "id": 3283,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3265,
                      "childList": null
                    }]
                  }, {
                    "id": 3266,
                    "code": null,
                    "name": "设备类型管理",
                    "href": "/setting/devicestyle",
                    "icon": null,
                    "parentId": 3262,
                    "childList": [{
                      "id": 3284,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3266,
                      "childList": null
                    }, {
                      "id": 3285,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3266,
                      "childList": null
                    }, {
                      "id": 3286,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3266,
                      "childList": null
                    }, {
                      "id": 3287,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3266,
                      "childList": null
                    }]
                  }, {
                    "id": 3267,
                    "code": null,
                    "name": "地区管理",
                    "href": "/setting/area",
                    "icon": null,
                    "parentId": 3262,
                    "childList": [{
                      "id": 3288,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3267,
                      "childList": null
                    }, {
                      "id": 3289,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3267,
                      "childList": null
                    }, {
                      "id": 3290,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3267,
                      "childList": null
                    }, {
                      "id": 3291,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3267,
                      "childList": null
                    }]
                  }]
                }]
              },
              {
                "id": 3221,
                "code": "permiss",
                "name": "账号权限",
                "href": "/permiss/accountman",
                "icon": null,
                "parentId": 0,
                "childList": [{
                  "id": 3222,
                  "code": null,
                  "name": "账号权限",
                  "href": "/",
                  "icon": null,
                  "parentId": 3221,
                  "childList": [{
                    "id": 3223,
                    "code": null,
                    "name": "账号管理",
                    "href": "/permiss/accountman",
                    "icon": null,
                    "parentId": 3222,
                    "childList": [{
                      "id": 3317,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3223,
                      "childList": null
                    }, {
                      "id": 3226,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3223,
                      "childList": null
                    }, {
                      "id": 3227,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3223,
                      "childList": null
                    }, {
                      "id": 3228,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3223,
                      "childList": null
                    }, {
                      "id": 3229,
                      "code": null,
                      "name": "重置密码",
                      "href": "/",
                      "icon": null,
                      "parentId": 3223,
                      "childList": null
                    }, {
                      "id": 3230,
                      "code": null,
                      "name": "新建仓库",
                      "href": "/",
                      "icon": null,
                      "parentId": 3223,
                      "childList": null
                    }]
                  }, {
                    "id": 3224,
                    "code": null,
                    "name": "权限组",
                    "href": "/permiss/rightgroup",
                    "icon": null,
                    "parentId": 3222,
                    "childList": [{
                      "id": 3231,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3224,
                      "childList": null
                    }, {
                      "id": 3232,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3224,
                      "childList": null
                    }, {
                      "id": 3233,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3224,
                      "childList": null
                    }, {
                      "id": 3234,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3224,
                      "childList": null
                    }]
                  }, {
                    "id": 3225,
                    "code": null,
                    "name": "权限管理",
                    "href": "/permiss/rightman",
                    "icon": null,
                    "parentId": 3222,
                    "childList": [{
                      "id": 3235,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3225,
                      "childList": null
                    }, {
                      "id": 3236,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3225,
                      "childList": null
                    }, {
                      "id": 3237,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3225,
                      "childList": null
                    }, {
                      "id": 3238,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3225,
                      "childList": null
                    }]
                  }]
                }]
              },
              {
                "id": 3292,
                "code": "complaint",
                "name": "投诉反馈",
                "href": "/complaint/complaintma",
                "icon": null,
                "parentId": 0,
                "childList": [{
                  "id": 3293,
                  "code": null,
                  "name": "投诉反馈",
                  "href": "/",
                  "icon": null,
                  "parentId": 3292,
                  "childList": [{
                    "id": 3294,
                    "code": null,
                    "name": "投诉管理",
                    "href": "/complaint/complaintma",
                    "icon": null,
                    "parentId": 3293,
                    "childList": [{
                      "id": 3318,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }, {
                      "id": 3365,
                      "code": null,
                      "name": "退款",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }, {
                      "id": 3297,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }, {
                      "id": 3298,
                      "code": null,
                      "name": "添加",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }, {
                      "id": 3299,
                      "code": null,
                      "name": "编辑",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }, {
                      "id": 3300,
                      "code": null,
                      "name": "平台退款后更新订单",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }, {
                      "id": 3301,
                      "code": null,
                      "name": "导出报表",
                      "href": "/",
                      "icon": null,
                      "parentId": 3294,
                      "childList": null
                    }]
                  }, {
                    "id": 3296,
                    "code": null,
                    "name": "咨询管理",
                    "href": "/complaint/advice",
                    "icon": null,
                    "parentId": 3293,
                    "childList": [{
                      "id": 3302,
                      "code": null,
                      "name": "查看",
                      "href": "/",
                      "icon": null,
                      "parentId": 3296,
                      "childList": null
                    }, {
                      "id": 3303,
                      "code": null,
                      "name": "删除",
                      "href": "/",
                      "icon": null,
                      "parentId": 3296,
                      "childList": null
                    }]
                  }]
                }]
              }
            ]
            this.menuList = res.data.data;
          }
        })
      },
      getInfo(){
        this.userInfo_().then((response)=>{
          if(response.success==200){
            this.userInfo = response.data;
          }
        })
      },
      //退出
      userQuit(){

      },
    },
    mounted() {
      this.routerUrl = this.$route.path.split("/")[1];
      this.getLists();
    },
    updated(){
      $(".frame-top-setting").hover(()=>{
        $(".frame-top-setting-list").stop().slideDown("fast");
      },()=>{
        $(".frame-top-setting-list").stop().slideUp("fast");
      })
    },
    beforeRouteEnter (to, from, next){
      next(vm => {
        vm.getInfo()
      })
    }

  }

</script>

<style>

  @import "../../assets/css/home.css";

</style>
