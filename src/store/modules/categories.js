import { appAxios } from "@/utils/AppAxios.js";

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations : {
    getCategories(state , category ){
        state.categories = category.map( c => {
            return {...c , selected: false}
        })
    }
  },
  actions : {
      getCategories({commit}){
          appAxios.get("/categories").then(response => {
              
              commit('getCategories' , response.data || [])
          })
      }
  },
  getters : {
      _categoryList : state => state.categories,
      selectedCategories : state => state.categories.filter(c => c.selected)
  }
};
