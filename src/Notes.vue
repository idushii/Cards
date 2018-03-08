<template>
  <div>
    <Panel />
    <Note v-for="(Note, index) in List" :id="Note.id" :key="`note-${index}`" />
    <ContextNote />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Panel from './Panel.vue'

export default {
  name: "Notes",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["isMove", "List"])
  },
  mounted() {},
  methods: {
    startMove(e) { this.$emit('startMove', e) }
  },
  components: { Panel }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>