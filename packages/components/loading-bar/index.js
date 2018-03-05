import Vue from 'vue'
import LoadingBar from './loadingbar'

let LoadingBarCstr = Vue.extend(LoadingBar)
let instance
let instances = []

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

LoadingBarInst.start = function () {
  LoadingBarInst()
  setTimeout(() => {
    instance.timer = setInterval(() => {
      let w = Number(instance.width.replace('%', '')) / 100
      if (w < 0.9) {
        w += Math.random() * 0.05
        instance.width = (w * 100).toFixed(2) + '%'
      } else {
        clearInterval(instance.timer)
      }
    }, 100)
  }, 300)
}

LoadingBarInst.success = function () {
  if (!instance) return
  instance.width = '100%'
  setTimeout(() => {
    instance.bgColor = '#00cc66'
    instance.status = 'start'
  }, 300)
  setTimeout(() => {
    instances = []
    instance.destroyElement()
  }, 500)
}

LoadingBarInst.error = function () {
  if (!instance) return
  instance.width = '100%'
  setTimeout(() => {
    instance.bgColor = '#ff6600'
    instance.status = 'error'
  }, 300)
  setTimeout(() => {
    instances = []
    instance.destroyElement()
  }, 500)
}

export default LoadingBarInst
