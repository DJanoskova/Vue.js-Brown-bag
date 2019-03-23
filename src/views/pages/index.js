import VuejsVsReact from './VuejsVsReact'
import NamedRoutes from './NamedRoutes'
import VueFormsBasics from './VueFormsBasics'

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
  }
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages