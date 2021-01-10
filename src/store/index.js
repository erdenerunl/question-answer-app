import { createStore } from 'vuex'
import questions from '@/store/modules/questions.js'
import categories from '@/store/modules/categories.js'

export default createStore({
  modules : {
    questions,
    categories
  },
  state: {
  },
  mutations: {
  },
  actions: {
    initApp({dispatch}){
      dispatch('categories/getCategories')
    }
  }
  
})
