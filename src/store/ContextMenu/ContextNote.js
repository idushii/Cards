export default {
  state: {
    Position: { Top: 0, Left: 0 },
    isShow: false,
    idNote: null,
  },
  mutations: {
    toggleContextNote(state, {Top = null, Left = null, Hide = false, Show = false, id = null}) {
      if (Hide) state.isShow = false
      if (Show) state.isShow = true
      if (!Hide && !Show) state.isShow = !state.isShow
      state.idNote = id;
      state.Position = { Top, Left }
    }
  },
  actions: {},
  getters: {
    positionContextNote: state => state.Position,
    isShowContextNote: state => state.isShow
  },
}