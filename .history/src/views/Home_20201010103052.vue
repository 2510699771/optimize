<template>
  <div>
    <el-button type="primary">按钮</el-button>
    <div id="main" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const { mapState: userState, mapActions: userActions } = userModule
import _ from 'lodash'
import echarts from 'echarts'
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
    var myChart = echarts.init(document.getElementById('main'))

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    myChart.setOption(option);
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