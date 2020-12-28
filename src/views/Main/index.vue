<template>
  <div class="container-main">
    <a class="btn-jump" href="#" @click="jumpViewPage('drag')">拖拽</a>
    <a class="btn-jump" href="#" @click="jumpViewPage('d3')">D3</a>
    <a class="btn-jump" href="#" @click="jumpViewPage('test')">测试</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    jumpViewPage (name) {
      this.$router.push({ name })
    }
  }
}
</script>
<style scoped>
.container-main {
  width: 100%;
  height: 100%;
  padding: 20px;
}
  .btn-jump {
    margin: 5px 10px;
    padding: 5px 10px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #dfdfdf;
  }
</style>
