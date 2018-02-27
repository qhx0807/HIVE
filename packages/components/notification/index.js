import Vue from 'vue'
import Notif from './notification.vue'

let ModalCstr = Vue.extend(Notif)
let instance

let Notification = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }

  instance = new ModalCstr({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el

  return instance.vm
}

const type = ['success', 'warning', 'info', 'error', 'confirm']

type.forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string') {
      options = {
        content: options
      }
    }
    options.type = type
    return Notification(options)
  }
})

Notification.remove = function () {
  instance.vm.visible = false
  instance.destroyElement()
}

export default Notification
