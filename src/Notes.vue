<template>
  <div>
    <Panel />
    <Note v-for="(Note, index) in ListNotes" :id="Note.id" :key="`note-${index}`" />
    <ContextNote />
    <ContextListNotes />
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
    ...mapGetters(["ListNotes"])
  },
  mounted() {  },
  methods: {  },
  components: { Panel }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>