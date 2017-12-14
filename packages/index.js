import iButton from './components/button'
import Row from './components/row'
import Col from './components/col'

const components = [iButton, Row, Col]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  iButton,
  Row,
  Col
}
