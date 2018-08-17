<template>
    <div>
      <h1>about页</h1>
      <button @click="clickToLast">上一页</button>
      <button @click="clickToNext">下一页</button>
    </div>
</template>

<style></style>

<script>
    export default {
        methods: {
          clickToNext: function(){
            this.$router.push('/router/user')
          },
          clickToLast: function() {
            this.$router.go(-1);
          }
        }
    }
</script>
