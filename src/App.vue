<template>
  <div id="app" @mousemove="progressMove">
    <router-view @startMove="startMove"></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      CurPos: { Top: null, Left: null }
    };
  },
  computed: {
      ...mapGetters(["isMove"]),
  },
  methods: {
    startMove(e) {
      this.$store.commit("startMove", { ...e, ...this.CurPos });
    },
    progressMove(e) {
      if (this.isMove) {
        this.$store.commit("processMove", { Top: e.y, Left: e.x });
      }
      this.CurPos = { Top: e.y, Left: e.x }
    }
  },
  mounted() {
    
    //this.$store.commit("startMove", { id: this.id });

  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
