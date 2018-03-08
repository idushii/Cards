let ListNotes = {
  state: {
    List: [{
      id: 1,
      Title: "Запись 1",
      Top: 500,
      Left: 10,
      Date: { Create: new Date(2018, 0, 1), Update: new Date(2018, 2, 1) },
      Style: { Background: "lightgrey", Color: "black" },
      Values: {
        Type: "Text",
        Font: { Size: 14, },
        Text: "Lorem ipsum..."
      },
      Size: 'S', // Small Meduim Large
      isEdit: false
    }],
    Move: {
      CurPos: { Top: null, Left: null },
      isMove: false, 
      idNote: null
    }
  },
  mutations: {
    add(state, {Note}) {
      state.List.push(Note)
      localStorage['Notes.ListNotes'] = JSON.stringify(state.List)
    },
    startMove(state, {id, Top, Left}) {
      state.Move.idNote = id;
      state.Move.CurPos = { Top, Left }
      state.Move.isMove = true;
    },
    processMove(state, {Top, Left}) {
      if (!state.Move.isMove) return;
      let index = state.List.reduce((result, Note, index) => Note.id == state.Move.idNote ? index : result, null)
      state.List[index].Top += Top - state.Move.CurPos.Top
      state.List[index].Left += Left - state.Move.CurPos.Left
      state.Move.CurPos = { Top, Left }
    },
    endMove(state) {
      state.Move.isMove = false;
      state.Move.idNote = false;
      localStorage['Notes.ListNotes'] = JSON.stringify(state.List)
    },
    toggleEditNote(state, { index }) {
      state.List[index].isEdit = !state.List[index].isEdit
    },
    setTextNote(state, { index, Text }) {
      state.List[index].Values.Text = Text
      state.List[index].Date.Update = new Date()
    },
    setSizeNote(state, { index, Size }) {
      state.List[index].Size = Size
    },
  },
  getters: {
    ListNotes: state => state.List,
    Note: state => id => state.List.filter(c => c.id == id).pop(),
    emptyNoteText: state => {
      return {
        id: state.List.length + 1,
        Title: "Запись " + (state.List.length + 1),
        Top: 10,
        Left: 10,
        Size: 'S',
        Style: { Background: "lightgrey", Color: "black" },
        Date: { Create: new Date(), Update: new Date() },
        Values: {
          Type: "Text",
          Font: { Size: 14, },
          Value: "Lorem ipsum..."
        },
        isEdit: false
      }
    },
    MoveNote: state => state.Move,
    isMoveNote: state => state.Move.isMove,
    indexNoteByID: state => id => state.List.reduce((result, Note, index) => Note.id == id ? index : result, null)
  },
  actions: {
    toggleEditNote({state, commit, getters}, { id }) {
      let index = getters.indexNoteByID(id)
      commit('toggleEditNote', { index })
      commit('toggleContextNote', {Hide: true})
    },
    setTextNote({state, commit, getters}, { id, Text }) {
      let index = getters.indexNoteByID(id)
      commit('setTextNote', { index, Text })
      commit('toggleEditNote', { index })
      commit('save')
    },
    setSizeNote({state, commit, getters}, {id, Size = "S"}) {
      let index = getters.indexNoteByID(id)
      commit('setSizeNote', {index, Size})
      commit('toggleContextNote', {Hide: true})
      commit('save')
    }
  }
}

if (localStorage['Notes.ListNotes']) ListNotes.state.List = JSON.parse(localStorage['Notes.ListNotes'])

export default ListNotes;
