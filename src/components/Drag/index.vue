<template>
  <div class="drag">
    <item
      class="drag-item"
      v-for="(item, index) in translates" :key="list[index].value"
      :style="{ transform: `translate3d(${item.x}, ${item.y}, 0)` }"
      @mousedown.native="onMousedown"
    >
      {{ list[index].label }}
    </item>
  </div>
</template>
<script>
import Item from './Item'
import { list } from './config'
export default {
  components: { Item },
  data () {
    return {
      list,
      translates: [],
      dragItem: null,
      itemWdith: 110,
      itemHeight: 50,
      eD: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    // 根据位置初始化顺序
    this.formatRect()
  },
  methods: {
    formatRect () {
      const { itemWdith, itemHeight } = this
      this.translates = list.map((item, index) => {
        item = {
          x: Math.ceil(index % 3) * itemWdith + 'px',
          y: Math.floor(index / 3) * itemHeight + 'px',
        }
        return item
      })
    },
    onMousedown (e) {
      const mDiv = e.target
      this.dragItem = mDiv

      const { transform } = this.dragItem.style
      const translate3d = transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))
      const ds = translate3d.split(',')
      const transX = parseInt(ds[0])
      const transY = parseInt(ds[1])
      // 鼠标相对拖拽元素的位置
      this.eD = {
        x: e.clientX - transX,
        y: e.clientY - transY
      }
      this.dragItem.style.zIndex = 999
      document.onmousemove = (event) => {
        this.onMousemove(event)
      }
      document.onmouseup = () => {
        this.dragItem.style.zIndex = 'auto'
        this.dragItem = null
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    onMousemove (e) {
      const { x, y } = this.eD
      this.dragItem.style.transform = `translate3d(${e.clientX - x}px, ${e.clientY - y}px, 0)`
    }
  }
}
</script>
<style scoped>
.drag {
  position: relative;
  height: 100%;
  /* overflow-y: auto */
}
  .drag-item {
    position: absolute;
    width: 100px;
    height: 40px;
    background-color: white;
    line-height: 40px;
    text-align: center;
    /* transform: translate3d(0, 0, 0); */
  }
</style>
