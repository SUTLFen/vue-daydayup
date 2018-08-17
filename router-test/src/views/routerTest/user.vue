<template>
    <div>
      <h1>{{msg}}</h1>
      <button @click="clickToLast">上一页</button>
    </div>
</template>

<style></style>

<script>
    export default {
        data() {
            return {msg: 'user页'}
        },

      methods: {
        clickToLast: function () {
          this.$router.go(-1);
        }
      }
    }
</script>
