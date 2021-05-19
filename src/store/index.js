import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editorBorderColor: '#6BD1FF'
  },
  mutations: {
    CHANGE_EDITOR_BORDER_COLOR(state, payload) {
      state.editorBorderColor = payload
    }
  },
  actions: {
    changeEditorBorderColor({ commit }, payload) {
      commit('CHANGE_EDITOR_BORDER_COLOR', payload)
    }
  },
  modules: {}
})
