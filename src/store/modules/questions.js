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
    getQuestions({commit} , selectedCategories){

      // category içindeki created_at e göre sırala (desc: azalarak)
      let url = "/questions?=_expand&category&_sort=created_at&_order=desc"
      
      if(selectedCategories){
        const IDs = selectedCategories
        .filter(c => c.selected)
        .map(c => `categoryId${c.id}`).join("&");

        url = `${url}&${IDs}`

      }


      appAxios.get(url).then(response => {
        commit('getQuestions', response.data || [])
      })
    },
    FilteredQuestions({commit}, categoryId){
      appAxios.get(`/questions?=categoryId=${categoryId}`).then(response => {
        commit('getQuestions', response.data || [])
      })
    }
  },
  getters : {
    _questionList : (state) => state.questions
  }
};
