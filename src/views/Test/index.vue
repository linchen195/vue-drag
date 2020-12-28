<template>
  <div class="container">
    <div ref="main" class="main">
      <p ref="testContent" class="test-content"></p>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import { barData } from '../../components/Chart/config'
// import { barData } from './config'
export default {
  data () {
    return {}
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      d3.select(this.$refs.main)
        .selectAll('p')
        .data(barData)
        .enter()
        .append('p')
        .style('color', 'red')
        .text(function (d) {
          return `${d.name} (${d.value})`
        })
    }
  }
}
</script>
<style scoped>
.container {
  padding: 15px;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  overflow: hidden;
}
.main {
  padding: 15px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 4px;
  overflow: auto;
}
</style>
