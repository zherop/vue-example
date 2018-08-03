<template>
  <div>
    <div class="example">
      <h1>对话框中使用组件</h1>
      <el-button @click="feedbackShow=true">意见反馈</el-button>
      <feedback :showDialog.sync="feedbackShow"></feedback>
    </div>
  </div>
</template>

<script>
import feedback from './feedback.vue'
export default {
  components: {
    feedback
  },

  data() {
    return {
      image: '',
      feedbackShow: false
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