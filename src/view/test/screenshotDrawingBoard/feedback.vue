<template>
  <div>
    <el-dialog title="意见反馈" :visible.sync="show" class="" @open="init" width="80%" @close="close" center>
      <el-form :model="feedback" ref="form" label-width="0px" class="metadata-add-form">
          <el-form-item label="" prop="info" :verify="['NotNull']">
            <el-input v-model="feedback.info" :rows="2" type="textarea" placeholder="告诉我们你的建议或遇到的问题。"></el-input>
          </el-form-item>
          <el-form-item label="">
            <span>屏幕截图 (可选)：</span>
          </el-form-item>
          <el-form-item label="" v-show="submitScreenshot" v-loading="dataLoading">
            <screenshot-drawing-board ref="sdb" v-if="show"
              :showOptionButton="false"
              @change="onChange"
              @save="onSave"
              :ignoreDomClass="ignoreDomClass"
              :ignoreDomId="ignoreDomId" 
              lineColor="#ff0000" 
              :lineSize="6">
            </screenshot-drawing-board>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox v-model="submitScreenshot">提交屏幕截图</el-checkbox>
          </el-form-item>
        </el-form>
        <el-button slot="footer" class="confirm-btn" type="primary" @click="submit" v-loading="confirmLoading">提交</el-button>
    </el-dialog>
  </div>
</template>

<script>
import util from '../../../common/util.js'
import screenshotDrawingBoard from 'screenshot-drawing-board'

export default {
  props: ['showDialog'],

  components:{
    screenshotDrawingBoard
  },

  data(){
    return {
      feedback:{
        info: ''
      },
      submitScreenshot:true,
      dataLoading:false,
      confirmLoading: false,
      screenshot:null,
      ignoreDomClass:['v-modal','el-dialog__wrapper'],
      ignoreDomId:[]
    }
  },

  computed: {
    show: {
      get() {
        return this.showDialog
      },
      set(val) {
        this.$emit('update:showDialog', val)
      }
    }
  },

  methods:{
    init(){
      // this.dataLoading = true
    },

    close(){
      this.$refs.sdb.clear();
    },

    onSave(img){
      console.log(img);
    },

    onChange(img){
      this.screenshot = img;
    },

    async submit(){
      try {
        await util.validateForm(this.$refs['form'])
        this.confirmLoading = true
        let formData = new FormData()
        if(this.submitScreenshot){
          formData.append('file',this.screenshot)
        }
        formData.append('feedback',this.feedback.info)
        let res = await axios.post('http://localhost:8080/feedback/submit', formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          },
          withCredentials: true,
        },
        )
        this.confirmLoading = false

        util.showResponseMessage(res.data.data)
        if(res.data.data.status===1){
          this.show = false
        }
      } catch (e) {
        util.showErrorMessageBox(e)
        this.confirmLoading = false
        return
      }
    }

  }
}
</script>

<style scoped>
.confirm-btn{
  width: 30%;
}
</style>
