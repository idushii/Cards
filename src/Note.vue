<template>
  <div
     class="card" 
    :style="{width: `${Note.Width}px`, top: `${Note.Top}px`, left: `${Note.Left}px`}" 
    @click.right.prevent="e => $store.commit('toggleContextMenu', {Top: e.y, Left: e.x, Show: true})">
    <div 
      class="card-header" 
      :style="{cursor: isCtrl ? 'move' : 'default'}"
      @keyup.down="isCtrl = true"
      @mousedown.ctrl="e => $store.commit('startMove', { id, Top: e.y, Left: e.x })" 
      @mousemove="isCtrl = false"
      @mousemove.ctrl="processMove"
      @mouseup="endMove">
        {{Note.Title}}</div>
    <div class="card-body" v-if="!Note.isEdit">{{Note.Values.Text}}</div>
    <div class="card-body" v-if="Note.isEdit">
      <textarea class="form-control" :value="Note.Values.Text" @keydown.esc="$store.commit('toggleEditNote', { id })"></textarea>
    </div>
    <div class="card-footer text-center"><small>Последнее изменение {{Note.Date.Update | moment}}</small></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "Note",
  props: { id: { type: Number, required: true } },
  data() {
    return {
      isCtrl: false
    };
  },
  computed: {
    Note() {
      return this.$store.getters.Note(this.id);
    },
    ...mapGetters(["isMoveNote"]),
  },
  mounted() {},
  methods: {
    processMove(e) {
      this.isCtrl = true
      if (this.isMoveNote) {
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