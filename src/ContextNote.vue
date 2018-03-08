<template>
  <ul class="list-group" id="ContextNote" v-show="isShowContextMenu" :style="{ top: positionContextMenu.Top+'px', left: positionContextMenu.Left+'px' }">
    <li class="list-group-item">dddd</li>
    <li class="list-group-item list-group-item-primary">dddd</li>
    <li class="list-group-item list-group-item-secondary">dddd</li>
    <li class="list-group-item list-group-item-success">dddd</li>
    <li class="list-group-item list-group-item-danger">dddd</li>
    <li class="list-group-item list-group-item-warning">dddd</li>
    <li class="list-group-item list-group-item-info">dddd</li>
    <li class="list-group-item list-group-item-light">dddd</li>
    <li class="list-group-item list-group-item-dark">dddd</li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ContextNote",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isShowContextMenu", "positionContextMenu"])
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #ContextNote {
   position: absolute;
   max-width: 200px;
 }
</style>