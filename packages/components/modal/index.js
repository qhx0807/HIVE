import Vue from 'vue'
import Modal from './modal.vue'
import ModalBox from './modal-box.vue'

// export default Modal
let ModalCstr = Vue.extend(ModalBox)
let instance

let Mb = function (options) {
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
  Mb[type] = options => {
    if (typeof options === 'string') {
      options = {
        content: options
      }
    }
    options.type = type
    return Mb(options)
  }
})

Mb.remove = function () {
  instance.vm.visible = false
  instance.destroyElement()
}

export {Modal, Mb}
