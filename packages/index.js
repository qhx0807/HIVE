import iButton from './components/button'
import Row from './components/row'
import iCol from './components/col'
import Icon from './components/icon'

const components = [iButton, Row, iCol, Icon]

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
  iCol,
  Icon
}
