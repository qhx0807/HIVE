import Vue from 'vue'
import msg from './message.vue'

let MessageCstr = Vue.extend(msg)
let instance
let instances = []
let count = 1

let Message = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let id = 'message_' + count++

  instance = new MessageCstr({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.id = id
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)

  return instance.vm
}

const type = ['success', 'warning', 'info', 'error']

type.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Message
