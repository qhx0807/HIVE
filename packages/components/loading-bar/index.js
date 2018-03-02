import Vue from 'vue'
import LoadingBar from './loadingbar'

let LoadingBarCstr = Vue.extend(LoadingBar)
let instance
let instances

let LoadingBarInst = function (options) {
  options = options || {}
  instance = new LoadingBarCstr({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)

  return instance.vm
}

LoadingBarInst.success = function () {

}

LoadingBarInst.finish = function () {

}

LoadingBarInst.error = function () {

}

export default LoadingBarInst
