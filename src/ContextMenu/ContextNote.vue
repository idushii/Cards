<template>
  <ul 
    class="list-group" 
    id="ContextNote" 
    v-show="isShowContextNote" 
    :style="{ top: positionContextNote.Top+'px', left: positionContextNote.Left+'px' }"
    @click.right.prevent
  >
    <li class="list-group-item">Переименовать</li>
    <li class="list-group-item" @click="$store.dispatch('toggleEditNote', {id: idContextNote})">Изменить</li>
    <li class="list-group-item">Архивировать</li>
    <li class="list-group-item list-group-item-danger">Удалить</li>
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
import { mapGetters } from "vuex";
export default {
  name: "ContextNote",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isShowContextNote", "positionContextNote", "idContextNote"])
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
   cursor: pointer;
 }
</style>