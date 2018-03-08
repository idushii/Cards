export default {
  state: {
    Position: { Top: 0, Left: 0 },
    isShow: false
  },
  mutations: {
    toggleContextMenu(state, {Top = null, Left = null, Hide = false, Show = false}) {
      if (Hide) state.isShow = false
      if (Show) state.isShow = true
      if (!Hide && !Show) state.isShow = !state.isShow
      state.Position = { Top, Left }
    }
  },
  actions: {},
  getters: {
    positionContextMenu: state => state.Position,
    isShowContextMenu: state => state.isShow
  },
}