<template>
  <div>
    <Card v-for="(Card, index) in List" :card="Card" :id="Card.id" :key="`card-${index}`" @startMove="startMove" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Cards",
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>