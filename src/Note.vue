<template>
  <div
     class="card" 
    :style="{width: `${Note.Width}px`, top: `${Note.Top}px`, left: `${Note.Left}px`}" 
    @click.right.prevent="e => $store.dispatch('showContex', {Top: e.y, Left: e.x, Show: true, id, Type: 'Note', e})">
    <div 
      class="card-header" 
      :style="{cursor: 'move'}"
      @mousedown.left="e => $store.commit('startMove', { id, Top: e.y, Left: e.x })" 
      @mousemove.left="processMove"
      @mouseup.left="endMove">
        {{Note.Title}} <small>от {{Note.Date.Create | momentDate}}</small></div>
    <div class="card-body" v-if="!Note.isEdit">{{Note.Values.Text}}</div>
    <div class="card-body" v-if="Note.isEdit">
      <textarea 
        class="form-control" 
        :value="Note.Values.Text" 
        @keydown.esc="$store.dispatch('toggleEditNote', { id })"
        @keydown.enter.ctrl="e => $store.dispatch('setTextNote', {Text: e.target.value, id})"
      ></textarea>
    </div>
    <div class="card-footer text-center"><small>Последнее изменение {{Note.Date.Update | moment}}</small></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import moment from "moment";

export default {
  name: "Note",
  props: { id: { type: Number, required: true } },
  data() {
    return {
    };
  },
  computed: {
    Note() {
      return this.$store.getters.Note(this.id);
    },
    ...mapState({
        isMove: state => state.Notes.Move.isMove
      })
  },
  mounted() {},
  methods: {
    processMove(e) {
      if (this.isMove) {
        this.$store.commit("processMove", { Top: e.y, Left: e.x });
      }
    },
    endMove() {
      this.$store.commit("endMove");
    }
  },
  filters: {
    moment: function(date_) {
      return moment(date_)
        .locale("ru")
        .fromNow();
    },
    momentDate: function(date_) {
      return moment(date_)
        .locale("ru").format("Do MMM YY")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  position: absolute;
  user-select: none;
}
</style>