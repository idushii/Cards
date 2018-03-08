export default {
  state: {
    List: [{
      id: 1,
      Title: "Запись 1",
      Top: 500,
      Left: 10,
      Witdh: 200,
      Height: 100,
      Date: { Create: new Date(2018, 0, 1), Update: new Date(2018, 2, 1) },
      Style: { Background: "lightgrey", Color: "black" },
      Values: {
        Type: "Text",
        Font: { Size: 14, },
        Text: "Lorem ipsum..."
      },
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
    },
    toggleEditNote(state, { id }) {
      let index = state.List.reduce((result, Note, index) => Note.id == id ? index : result, null)
      console.log(state.List[index])
      state.List[index].isEdit = !state.List[index].isEdit
    }
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
        Witdh: 20,
        Height: 20,
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
    isMoveNote: state => state.Move.isMove
  }
}

