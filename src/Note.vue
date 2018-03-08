<template>
  <div
     class="card" 
    :style="{width: `${Card.Width}px`, top: `${Card.Top}px`, left: `${Card.Left}px`}" >
    <div 
      class="card-header" 
      :style="{cursor: isCtrl ? 'move' : 'default'}"
      @keyup.down="isCtrl = true"
      @mousedown.ctrl="e => $store.commit('startMove', { id, Top: e.y, Left: e.x })" 
      @mousemove="isCtrl = false"
      @mousemove.ctrl="processMove"
      @mouseup="endMove">
        {{Card.Title}}</div>
    <div class="card-body">{{Card.Values.Text}}</div>
    <div class="card-footer text-center"><small>Последнее изменение {{Card.Date.Update | moment}}</small></div>
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
    Card() {
      return this.$store.getters.Card(this.id);
    },
    ...mapGetters(["isMove"]),
  },
  mounted() {},
  methods: {
    processMove(e) {
      this.isCtrl = true
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