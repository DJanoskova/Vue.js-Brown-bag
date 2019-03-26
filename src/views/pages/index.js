import VuejsVsReact from './VuejsVsReact'
import Introduction from './Introduction'
import Lifecycle from './Lifecycle'
import Computed from './Computed'
import Components from './CustomComponents'
import NamedRoutes from './NamedRoutes'
import VueFormsBasics from './VueFormsBasics'
import Emit from './Emit'
import Watch from './Watch'
import CustomVModel from './CustomVModel'
import Store from './Store'
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
    name: 'lifecycle',
    meta: {
      title: 'Vue.js lifecycle hooks'
    },
    component: Lifecycle
  },
  {
    name: 'computed',
    meta: {
      title: 'Computed properties'
    },
    component: Computed
  },
  {
    name: 'watch',
    meta: {
      title: 'Watch'
    },
    component: Watch
  },
  {
    name: 'custom-components',
    meta: {
      title: 'Custom components'
    },
    component: Components
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
    name: 'using-store',
    meta: {
      title: 'Using store (vuex)'
    },
    component: Store
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