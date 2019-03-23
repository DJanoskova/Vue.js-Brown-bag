<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6"
        v-for="framework in frameworks"
        :key="framework.title">
        <h4 class="text-center">{{ framework.title }}</h4>
        <div class="card mb-2">
          <div class="card-body">
            <ul>
              <li v-for="(item, index) in framework.list" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center mt-4 text-muted">
      Totally unbiased! 🤷🏻
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      frameworks: [
        {
          title: 'Vue',
          list: [
            'Programmer friendly API',
            'Documentation',
            'Vuex',
            'Form handling and v-model',
            'Emitting events',
            'Named routes',
            'Stuff gets done faster',
            'React\'s and Angular\'s love child 👨‍❤️‍👨',
            'The future'
          ]
        },
        {
          title: 'React',
          list: [
            'Everything is in your hands 🔪', 'Context', 'JSX??', 'Hooks?'
          ]
        }
      ]
    }
  }
}
</script>