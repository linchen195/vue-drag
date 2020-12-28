<template>
  <div class="item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.item {
  display: inline-block;
  margin: 0 5px 10px;
  border-radius: 4px;
  border: 1px solid lightgray;
  user-select: none;
}
</style>
