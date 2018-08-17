<template>
  <div>
    <h1>首页index</h1>
    <button @click="clickToNext">下一页</button>
  </div>
</template>

<style></style>

<script>
    export default {
        methods: {
          clickToNext: function(){
            this.$router.push('/router/about');
          }
        }
    }
</script>
