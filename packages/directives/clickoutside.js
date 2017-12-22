export default {
  bind (el, binding, vnode) {
    function handler (e) {
      if (el.contains(e.target)) return false
      if (binding.expression) binding.value(e)
    }
    el.__vueClickOutside__ = handler
    document.addEventListener('click', handler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
