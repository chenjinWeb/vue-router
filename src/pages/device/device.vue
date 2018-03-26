<template>

  <div>

    <div>device</div>

    <router-link to="device/devicedetail">跳到子组件</router-link>

    <router-view></router-view>

  </div>

</template>

<script>

    export default {
        name: "device",
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {

        }

    }

</script>

<style scoped>


</style>
