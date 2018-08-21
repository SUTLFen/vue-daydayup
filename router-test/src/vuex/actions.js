import * as types from './types'

export default {
  'increment': ({commit}) => {
      commit(types.INCREMENT, {
         odd: '这是一个增加的函数'
      })
  },

  'decrement' : ({commit}) => {
      commit(types.DECREMENT, {
        odd: '这是一个减少的函数'
      });
  },

  'clickOdd' : ({commit}) => {
      commit(types.CLICKODD, {
        odd: '这是一个点击事件'
      })
  }
}
