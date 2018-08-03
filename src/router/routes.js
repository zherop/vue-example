import Vue from 'vue'
import Router from 'vue-router'
import ScreenshotDrawingBoard1 from '../view/test/screenshotDrawingBoard/index.vue'
import ScreenshotDrawingBoard2 from '../view/test/screenshotDrawingBoard/second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/test/screenshot-drawing-board'
    },
    {
      path: '/test/screenshot-drawing-board-1',
      component: ScreenshotDrawingBoard1
    },
    {
      path: '/test/screenshot-drawing-board-2',
      component: ScreenshotDrawingBoard2
    }
  ]
})
