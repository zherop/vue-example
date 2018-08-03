<template>
  <div>
    <div class="example">
      <h1>当前页面使用组件</h1>
      <div>
        <screenshot-drawing-board ref="sdb"
          :showOptionButton="true"
          @save="onSave"
          :ignoreDomClass="ignoreDomClass"
          :ignoreDomId="ignoreDomId">
        </screenshot-drawing-board>
      </div>
      <div v-if="image!=''" style="width:100%">
        <p>生成图片：</p>
        <img :src="image" width="100%"/>
      </div>
    </div>
  </div>
</template>

<script>
import screenshotDrawingBoard from 'screenshot-drawing-board'
export default {
  components: {
    screenshotDrawingBoard
  },

  data() {
    return {
      image: '',
      ignoreDomClass: ['v-modal', 'el-dialog__wrapper'],
      ignoreDomId: []
    }
  },

  created() {},

  methods: {
    onSave(img) {
      this.image = img
    }
  }
}
</script>

<style scoped>
</style>