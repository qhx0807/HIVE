import Vue from 'vue'
import Notif from './notification.vue'

let NotifyConstructor = Vue.extend(Notif)
let instance
let instances = []
let count = 1

let Notification = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }

  let id = 'notification_' + count++
  let userOnClose = options.onClose
  let position = options.position || 'top-right'

  options.onClose = function () {
    Notification.close(id, userOnClose)
  }

  instance = new NotifyConstructor({
    data: options
  })

  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el

  let verticalOffset = options.offset || 0
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
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

Notification.close = function (id, userOnClose) {
  let index = -1
  const len = instances.length
  const curInstance = instances.filter((instance, i) => {
    if (instance.id === id) {
      index = i
      return true
    }
    return false
  })[0]
  if (!curInstance) return
  if (typeof userOnClose === 'function') {
    userOnClose(curInstance)
  }
  instances.splice(index, 1)

  if (len <= 1) return
  const position = curInstance.position
  const removedHeight = curInstance.vm.$el.offsetHeight
  for (let i = index; i < len - 1; i++) {
    if (instances[i].position === position) {
      instances[i].vm.$el.style[instance.verticalProperty] = parseInt(instances[i].vm.$el.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px'
    }
  }
}

Notification.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Notification
