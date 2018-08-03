/* global URL */
import { Message, MessageBox, Notification } from 'element-ui'
const util = window.util = window.util || {}
util.showResponseMessage = (data) => {
  if (data.status === 1) {
    Message({
      showClose:true,
      duration: 2000,
      message: data.message || '操作成功！',
      type: 'success'
    })
    return
  }
  MessageBox({
    title: '提示',
    type: 'error',
    message: data.message || '操作失败！'
  })
}
util.showErrorMessageBox = async (msg) => {
  try{
    await MessageBox({
      title: '提示',
      type: 'error',
      message: msg.toString()
    })
  }catch(e){
    return
  }
}
util.showErrorMessageBox = async (msg, htmlFlag) => {
  try{
    await MessageBox({
      title: '提示',
      type: 'error',
      message: msg.toString(),
      dangerouslyUseHTMLString: !!htmlFlag
    })
  }catch(e){
    return
  }
}
util.showMessage = (res) => {
  Message({
	showClose:true,
    duration: 2000,
    message: res.data.message,
    type: res.data.status === 1 ? 'success' : 'error'
  })
}
util.showSuccess = (msg) => {
  Message({
    message: msg,
    showClose:true,
    type: 'success',
    duration: 2000
  })
}
util.showError = (msg) => {
  Message({
	showClose:true,
	duration: 2000,
    message: msg,
    type: 'error'
  })
}
util.showNotification = (res) => {
  Notification({
    title: res.status === 1 ? '操作成功' : '操作失败',
    message: res.message,
    type: res.status === 1 ? 'success' : 'error',
    duration: 2000
  })
}
util.showErrorNotification = (error) => {
  Notification({
    title: '错误',
    message: error.toString(),
    type: 'error',
    duration: 2000
  })
}
// 验证表单
util.validateForm = (formRef) => {
  return new Promise((resolve, reject) => {
    formRef.validate(valid => {
      if (valid) {
        return resolve(true)
      }
      return reject(new Error('没有正确填写表单项！'))
    })
  })
}

export default util
