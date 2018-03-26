<template>
  <div>
    <div>index</div>
    <div>地址栏里name值是：{{name}}</div>
    <div>地址栏里age值是：{{age}}</div>
    <button @click="$router.go(-1)">返回</button>
  </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {
              name:this.$route.query.name,
              age:this.$route.query.age,
            }
        },
        computed: {},
        methods: {},
        mounted() {

        }

    }

</script>

<style scoped>


</style>
