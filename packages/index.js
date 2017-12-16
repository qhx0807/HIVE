import iButton from './components/button'
import ButtonGroup from './components/button-group'
import Row from './components/row'
import iCol from './components/col'
import Icon from './components/icon'

const components = [iButton, ButtonGroup, Row, iCol, Icon]

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
  ButtonGroup,
  Row,
  iCol,
  Icon
}
