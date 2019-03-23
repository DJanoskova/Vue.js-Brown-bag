<template>
  <div class="container">

    <a href="https://router.vuejs.org/guide/essentials/named-routes.html" target="_blank">
      https://router.vuejs.org/guide/essentials/named-routes.html
    </a>

    <hr>

    <Codemirror v-model="routerJs" />
    <p class="text-muted text-center">js - router initialization</p>

    <Codemirror v-model="htmlCode" lang="html" />
    <p class="text-muted text-center">html usage</p>

    <Codemirror v-model="routerPush" />
    <p class="text-muted text-center">js - programmatic navigation</p>

  </div>
</template>

<script>
import Codemirror from '../../components/Codemirror'

export default {
  components: {
    Codemirror
  },
  data () {
    return {
      routerJs: 'const router = new VueRouter({\n' +
      '  routes: [\n' +
      '    {\n' +
      '      path: \'/user/:userId\',\n' +
      '      name: \'user\',\n' +
      '      component: User\n' +
      '    }\n' +
      '  ]\n' +
      '})',
      htmlCode: `<router-link :to="{ name: 'user', params: { userId: 123 }}">\n  User\n</router-link>`,
      routerPush: 'this.$router.push({\n' +
      '  name: \'user\',\n' +
      '  params: { userId: 123 }\n' +
      '})'
    }
  }
}
</script>