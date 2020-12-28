<template>
  <div class="wrap-d3">
    <svg ref="chart"></svg>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import * as d3 from 'd3'
import { barData } from './config'
export default {
  data () {
    return {
      barChart: null,
      width: 400,
      height: 400
    }
  },
  mounted () {
    this.setChartStyle()
    this.setBarChartX()
  },
  methods: {
    // 设置样式
    setChartStyle () {
      this.barChart = d3.select(this.$refs.chart)
        .attr('width', this.width)
        .attr('height', this.height)
        .style('background-color', 'efefef')

      const barWidth = (this.width / barData.length)
      this.barChart.selectAll('rect')
        .data(barData)
        .enter()
        .append('rect')
        .attr('y', d => this.height - d.value)
        .attr('height', d => d.value)
        .attr('width', barWidth - 10)
        .attr('transform', (d, i) => {
          const translate = [barWidth * i, 0]
          return `translate(${translate})`
        })
        .attr('fill', '#A64C38')
    },
    // X轴
    setBarChartX () {
      const xScale = d3.scaleLinear()
        .domain([0, d3.max(barData)])
        .range([0, this.width])
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(barData)])
        .range([this.height, 0])
      const xAxis = d3.axisBottom()
        .scale(xScale)
      const yAxis = d3.axisLeft()
        .scale(yScale)
      this.barChart.append('g')
        .attr('transform', 'translate(50, 10)')
        .call(yAxis)
      const xAxisTranslte = this.height - 20
      this.barChart.append('g')
        .attr('transform', `translate(50, ${xAxisTranslte})`)
        .call(xAxis)
    }
    // Y轴
  }
}
</script>
<style scoped>
.wrap-d3 {
  padding: 10px;
}
</style>
