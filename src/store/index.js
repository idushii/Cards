import Vue from 'vue'
import Vuex from 'vuex'

import Panel from "./panel"
import ContextMenu from "./ContextMenu"
import Notes from "./Notes"

Vue.use(Vuex)

var vuex = new Vuex.Store({
  modules: { Panel, ContextMenu, Notes },
  state: {
  },
  mutations: {
  },
  getters: {
  }

})


export default vuex;