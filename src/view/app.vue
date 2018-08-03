<template>
  <div id="app" class="app-wrap">
    <el-row>
      <el-col :span="5">
        <el-menu
          :default-openeds="['test']"
          :default-active="activeMenu"
          class="el-menu-vertical-demo">
          <el-submenu index="test">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>示例</span>
            </template>
            <el-menu-item index="test/screenshot-drawing-board-1" @click="go('/test/screenshot-drawing-board-1')">screenshot-drawing-board-1</el-menu-item>
            <el-menu-item index="test/screenshot-drawing-board-2" @click="go('/test/screenshot-drawing-board-2')">screenshot-drawing-board-2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="19">
        <div class="content-view">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {},

  data() {
    return {
      activeMenu: 'test/screenshot-drawing-board-1'
    }
  },

  created() {
    var hash = window.location.hash
    hash = hash.replace('#/', '')
    if (hash.indexOf('?') > 0) {
      hash = hash.substring(0, hash.indexOf('?'))
    }
    console.log(hash)
    this.activeMenu = hash
  },

  methods: {
    go(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.content-view {
  margin-left: 20px;
}
</style>