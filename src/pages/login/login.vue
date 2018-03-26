<template>
    <div>
      <div>login</div>
      <router-link to="/index">跳到index</router-link>
      <!--<router-link to="/index/3">跳到index</router-link>动态路由配置-->
      <router-link to="/device">跳到device</router-link>
      <router-link to="/device/devicedetail">跳到devicedetail</router-link>

      <div>
        <button @click="goIndex()">跳到index</button>
        <button @click="goDevice()">跳到device</button>
        <button @click="goDetail()">跳到devicedetail</button>
      </div>

    </div>
</template>

<script>

    export default {
        name: "app",
        data() {
            return {}
        },
        computed: {},
        methods: {
          goIndex(){
            this.$router.push({name:"index",query:{name:'mcj',age:28}})
          },
          goDevice(){
            //replace跳转之后不能返回
            this.$router.push({name:"device"})
          },
          goDetail(){
            this.$router.push({name:"devicedetail"})
          }
        },
        mounted() {

        }

    }

</script>

<style scoped>


</style>
