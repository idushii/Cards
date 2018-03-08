let panel = {
  state: {
    position: { Top: 100, Left: 50 },
    cursor: { Top: 0, Left: 0 },
    isMove: false
  },
  mutations: {
    startMovePanel(state, { Top, Left }) {
      state.cursor = { Top, Left }
      state.isMove = true;
    },
    processMovePanel(state, {Top, Left}) {
      if (state.isMove) {
        state.position.Top += Top - state.cursor.Top
        state.position.Left += Left - state.cursor.Left
        state.cursor = { Top, Left }
      }
    },
    endMovePanel(state) {
      state.isMove = false;
      localStorage['Notes.Panel.Position'] = JSON.stringify(state.position)
    },
  },
  actions: {},
  getters: {
    positionPanel: state => state.position,
    isMovePanel: state => state.isMove
  }
}

if (localStorage['Notes.Panel.Position'])
  panel.state.position = JSON.parse(localStorage['Notes.Panel.Position'])

export default panel;
