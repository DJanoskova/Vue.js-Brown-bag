import VuejsVsReact from './VuejsVsReact'
import IsVueHard from './IsVueHard'
import Introduction from './Introduction'
import EventHandling from './EventHandling'
import Lifecycle from './Lifecycle'
import Computed from './Computed'
import Components from './CustomComponents'
import NamedRoutes from './NamedRoutes'
import VueFormsBasics from './VueFormsBasics'
import Emit from './Emit'
import Watch from './Watch'
import CustomVModel from './CustomVModel'
import CustomValidatingInput from './CustomValidatingInput'
import Store from './Store'
import WhoUsesVue from './WhoUsesVue'
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
    name: 'is-vue-hard',
    meta: {
      title: 'Can you learn Vue?'
    },
    component: IsVueHard
  },
  {
    name: 'introduction',
    meta: {
      title: 'Introduction to Vue.js'
    },
    component: Introduction
  },
  {
    name: 'event-handling',
    meta: {
      title: 'Event handling'
    },
    component: EventHandling
  },
  {
    name: 'lifecycle',
    meta: {
      title: 'Vue.js lifecycle hooks'
    },
    component: Lifecycle
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
    name: 'custom-validating-input',
    meta: {
      title: 'Custom validating input and form'
    },
    component: CustomValidatingInput
  },
  {
    name: 'using-store',
    meta: {
      title: 'Using store (vuex)'
    },
    component: Store
  },
  {
    name: 'who-uses-vue',
    meta: {
      title: 'Who uses Vue?'
    },
    component: WhoUsesVue
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