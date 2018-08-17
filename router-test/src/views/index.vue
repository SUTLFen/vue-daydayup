<template>
    <div>
      <h1>{{msg}}</h1>
      <button class="btnComm" @click="toRouterTest">router test</button>
      <br/>
      <button class="btnComm" @click="toVuexTest">vuex test</button>
      <br/>

    </div>
</template>

<script>
    export default {
        data() {
            return {msg: 'vue-daydayup'}
        },
      methods: {
        toRouterTest: function () {
          this.$router.push('/router/index')
        },
        toVuexTest: function() {

        }
      }
    }
</script>

<style>
  .btnComm {
    margin-bottom: 10px;
  }
</style>
