import VuejsVsReact from './VuejsVsReact'
import NamedRoutes from './NamedRoutes'
import VueFormsBasics from './VueFormsBasics'
import Emit from './Emit'
import CustomVModel from './CustomVModel'

const pages = [
  {
    name: 'vuejs-vs-react',
    meta: {
      title: 'Vue.js vs React'
    },
    component: VuejsVsReact
  },
  {
    name: 'names-routes',
    meta: {
      title: 'Named routes'
    },
    component: NamedRoutes
  },
  {
    name: 'vue-forms-basics',
    meta: {
      title: 'Vue forms basics'
    },
    component: VueFormsBasics
  },
  {
    name: 'emit',
    meta: {
      title: '$emit'
    },
    component: Emit
  },
  {
    name: 'custom-v-model',
    meta: {
      title: 'Custom v-model'
    },
    component: CustomVModel
  }
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages