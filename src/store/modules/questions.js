import {appAxios} from '@/utils/AppAxios.js'


export default {
  namespaced: true,
  state: {
    questions: []

  },
  mutations : {
    getQuestions(state , responseQuestions){
      state.questions = responseQuestions
    }
  },
  actions : {
    getQuestions({commit}){
      appAxios.get('/questions').then(response => {
        commit('getQuestions', response.data || [])
      })
    }
  },
  getters : {
    _questionList : (state) => state.questions
  }
};
