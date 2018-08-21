<template>
    <div>
      <h1>{{msg}}</h1>
      <button class="btnComm" @click="toRouterTest">router test</button>
      <br/>
      <button class="btnComm" @click="toVuexTest">vuex test</button>
      <br/>
      <button class="btnComm" @click="toSassTest">sass test</button>
      <br/>

      <button class="btnComm" @click="toQuesDemoTest">问卷调查Demo</button>
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
          this.$router.push('/vuex/index');
        },
        toSassTest: function() {
          this.$router.push('/sass/index');
        },
        toQuesDemoTest: function() {
          this.$router.push('/quesDemo/index');
        }
      }
    }
</script>

<style language="scss" scoped>



  .btnComm {
    margin-bottom: 10px;
  }


</style>
