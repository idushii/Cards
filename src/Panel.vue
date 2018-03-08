<template>
  <ul class="list-group" id="Panel" :style="{ top: pos.Top + 'px', left: pos.Left + 'px' }">
    <li class="list-group-item list-group-item-dark" id="head-panel"
      @mousedown="startMovePanel"
      @mousemove="processMovePanel"
      @mouseup="endMovePanel"
    >Элементы</li>
    <li class="list-group-item">Новая заметка</li>
    <li class="list-group-item">Новый список</li>
  </ul>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {};
  },
  computed: {
    pos() {
      return this.$store.getters.positionPanel;
    },
    isMove() { return this.$store.getters.isMovePanel }
  },
  mounted() {},
  methods: {
    startMovePanel(e) {
      this.$store.commit("startMovePanel", { Top: e.y, Left: e.x });
    },
    processMovePanel(e) {
    },
    endMovePanel(e) {
      this.$store.commit("endMovePanel");
    },
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