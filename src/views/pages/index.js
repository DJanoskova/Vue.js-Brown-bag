import VuejsVsReact from './VuejsVsReact'
import Introduction from './Introduction'
import NamedRoutes from './NamedRoutes'
import VueFormsBasics from './VueFormsBasics'
import Emit from './Emit'
import CustomVModel from './CustomVModel'
import Links from './Links'

const pages = [
  {
    name: 'vuejs-vs-react',
    meta: {
      title: 'Vue.js vs React'
    },
    component: VuejsVsReact
  },
  {
    name: 'introduction',
    meta: {
      title: 'Introduction to Vue.js'
    },
    component: Introduction
  },
  {
    name: 'named-routes',
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
  },
  {
    name: 'links',
    meta: {
      title: 'Useful links'
    },
    component: Links
  }
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages