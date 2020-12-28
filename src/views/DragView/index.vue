<template>
  <div class="container-main">
    <div class="container-data"></div>
    <div class="container-drag">
      <drag :data="dragArr"></drag>
    </div>
  </div>
</template>
<script>
import Drag from '@/components/Drag'
import { dragArr } from './config'
export default {
  components: { Drag },
  data () {
    return {
      dragArr
    }
  }
}
</script>
<style scoped>
.container-main {
  display: flex;
  padding: 100px;
  width: 100%;
  height: 100%;
}
  .container-data {
    padding: 20px;
    width: 400px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  .container-drag {
    /* flex-grow: 1; */
    margin-left: 30px;
    padding: 20px;
    width: 400px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
</style>
