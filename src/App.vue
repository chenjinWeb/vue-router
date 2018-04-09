<template>

  <div>

    <keep-alive>

      <router-view></router-view>

    </keep-alive>

  </div>

</template>

<script>
  import {mapState,mapActions} from "vuex"
export default {
  name: 'App',
  data(){
    return {

    }
  },

}
</script>

<style>

  @import "./assets/css/common.css";

</style>
