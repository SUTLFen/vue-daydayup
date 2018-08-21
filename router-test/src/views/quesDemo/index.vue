<template>
    <div>{{msg}}</div>
    <input type="button" value="进入" @click="clickToQues"/>
</template>

<style></style>

<script>
    export default {
        data() {
            return {msg: 'vue模板页'}
        },
        method: {
          clickToQues: function(){
            this.$route.push()
          }
        }
    }
</script>
