import VuejsVsReact from './VuejsVsReact'
import NamedRoutes from './NamedRoutes'

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
    component: null
  }
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages