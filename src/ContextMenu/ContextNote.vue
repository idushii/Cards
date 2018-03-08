<template>
  <ul 
    class="list-group context-menu" 
    id="ContextNote" 
    v-show="isShowContextNote" 
    :style="{ top: positionContextNote.Top+'px', left: positionContextNote.Left+'px' }"
    @click.right.prevent
  >
    <template v-if="typeContextNote == 'main'">
      <li class="list-group-item">Переименовать</li>
      <li class="list-group-item" @click="$store.dispatch('toggleEditNote', {id: idContextNote})">Изменить</li>
      <li class="list-group-item" @click="$store.dispatch('setTypeContextNote', { Type: 'size' })">Размер</li>
      <li class="list-group-item">Архивировать</li>
      <li class="list-group-item list-group-item-danger">Удалить</li>
    </template>
    <template v-if="typeContextNote == 'size'">
      <li class="list-group-item" @click="$store.dispatch('setSizeNote', {Size: 'S', id: idContextNote})">Малый</li>
      <li class="list-group-item" @click="$store.dispatch('setSizeNote', {Size: 'M', id: idContextNote})">Средний</li>
      <li class="list-group-item" @click="$store.dispatch('setSizeNote', {Size: 'L', id: idContextNote})">Крупный</li>
    </template>
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
    return {
    };
  },
  computed: {
    ...mapGetters(["isShowContextNote", "positionContextNote", "idContextNote", "typeContextNote"])
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