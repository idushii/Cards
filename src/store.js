import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var vuex = new Vuex.Store({
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
      }
    }],
    Move: {
      CurPos: { Top: null, Left: null },
      isMove: false, 
      idCard: null
    }
  },
  mutations: {
    add(state, { Card }) {
      state.List.push(Card)
    },
    startMove(state, {id, Top, Left}) {
      state.Move.idCard = id;
      state.Move.CurPos = { Top, Left }
      state.Move.isMove = true;
    },
    processMove(state, {Top, Left}) {
      if (!state.Move.isMove) return;
      let index = state.List.reduce((result, card, index) => card.id == state.Move.idCard ? index : result, null)
      state.List[index].Top += Top - state.Move.CurPos.Top
      state.List[index].Left += Left - state.Move.CurPos.Left
      state.Move.CurPos = { Top, Left }
    },
    endMove(state) {
      state.Move.isMove = false;
      state.Move.idCard = false;
    },
  },
  getters: {
    List: state => state.List,
    Card: state => id => state.List.filter(c => c.id == id).pop(),
    emptyText: state => {
      return {
        id: state.List.length,
        Title: "Запись "+state.List.length,
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
        }
      }
    },
    Move: state => state.Move,
    isMove: state => state.Move.isMove
  }

})


export default vuex;