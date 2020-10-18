<template>
  <div>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const userModule = createNamespacedHelpers('user')
const {mapState: userState, mapActions: userActions} = userModule
import unionBy from 'lodash/unionBy'
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
    // this.$store.dispatch('', {})
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