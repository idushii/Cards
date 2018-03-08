<template>
  <div class="card" id="Panel" :style="{ top: positionPanel.Top + 'px', left: positionPanel.Left + 'px' }">
    <div class="card-header" id="head-panel" @mousedown="startMovePanel" @mousemove="processMovePanel" @mouseup="endMovePanel">Элементы</div>
    <ul class="list-group">
      <li class="list-group-item" @click="e => $store.commit('add', { Note: emptyNoteText })">Новая заметка</li>
      <li class="list-group-item">Новый список</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Panel",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["emptyNoteText", "positionPanel"])
  },
  mounted() {},
  methods: {
    startMovePanel(e) {
      this.$store.commit("startMovePanel", { Top: e.y, Left: e.x });
    },
    processMovePanel(e) {},
    endMovePanel(e) {
      this.$store.commit("endMovePanel");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Panel {
  position: absolute;
  user-select: none;
  z-index: 100;
}
#head-panel {
  cursor: move;
}
</style>