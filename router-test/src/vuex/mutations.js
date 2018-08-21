import * as types from './types'
import getters from './getters'

var state = {
  count: 10
}

const mutations = {
  [types.INCREMENT](state, payload) {
    console.log('123');
    console.log(payload.odd);
  },

  [types.DECREMENT](state, payload) {
    state.count--;
    console.log(payload.odd)
  },

  [types.CLICKODD](){
    if(state.count % 2 == 0) {
      state.count ++;
    }
  }
}

export default {
  state, mutations, getters
}
