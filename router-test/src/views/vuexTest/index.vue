<template>
  <div>
    <h3>{{title}}</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才增加" @click="clickOdd">
  </div>
</template>

<style></style>

<script>
  import store from '../../vuex/store';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    data() {
      return {
        title: 'vuex 学习',
      }
    },

    computed: mapGetters ([
      'count',
      'getOdd'
    ]),

    methods: mapActions ([
      'increment',
      'decrement',
      'clickOdd'
    ])
  }
</script>
