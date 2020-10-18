<template>
  <div></div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const userModule = createNamespacedHelpers('user')
const {mapState: userState, mapActions: userActions} = userModule
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    // ...userActions([])
  },
  mounted() {
    this.$store.dispatch('', {})
  },
  watch: {

  },
  computed: {
    ...userState(['name'])
  }
}
</script>

<style scoped lang='scss'>
</style>