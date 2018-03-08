export default {
  state: {
    Position: { Top: 0, Left: 0 },
    isShow: false,
    idNote: null,
    typeMenu: 'main'
  },
  mutations: {
    toggleContextNote(state, {Top = null, Left = null, Hide = false, Show = false, id = null}) {
      if (Hide) { state.isShow = false; }
      if (Show) { state.isShow = true; state.typeMenu = 'main'; }
      if (!Hide && !Show) { state.isShow = !state.isShow; if (state.isShow == true) { state.typeMenu = 'main'; } }
      state.idNote = id;
      state.Position = { Top, Left }
    }
  },
  actions: {
    setTypeContextNote({state}, { Type }) {
      state.typeMenu = Type
    }
  },
  getters: {
    positionContextNote: state => state.Position,
    isShowContextNote: state => state.isShow,
    idContextNote: state => state.idNote,
    typeContextNote: state => state.typeMenu
  },
}