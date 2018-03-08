<template>
  <ul 
    class="list-group" 
    id="ContextNote" 
    v-show="isShow" 
    :style="{ top: Position.Top+'px', left: Position.Left+'px' }"
    @click.right.prevent
  >
    <li class="list-group-item">Показать панель элементов</li>
    <!--li class="list-group-item list-group-item-primary">dddd</li>
    <li class="list-group-item list-group-item-secondary">dddd</li>
    <li class="list-group-item list-group-item-success">dddd</li>
    <li class="list-group-item list-group-item-danger">dddd</li>
    <li class="list-group-item list-group-item-warning">dddd</li>
    <li class="list-group-item list-group-item-info">dddd</li>
    <li class="list-group-item list-group-item-light">dddd</li>
    <li class="list-group-item list-group-item-dark">dddd</li-->
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ContextListNotes",
  props: { idNote: { type: Number } },
  data() {
    return {};
  },
  computed: {
    ...mapState({
        isShow: state => state.ContextListNotes.isShow,
        Position: state => state.ContextListNotes.Position,
      })
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #ContextNote {
   position: absolute;
   max-width: 300px;
   cursor: pointer;
 }
</style>