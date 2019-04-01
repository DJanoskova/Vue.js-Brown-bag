<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6"
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
    <p class="text-center small">
      PS:
      <a href="https://pbs.twimg.com/media/DqqLAUIVsAI3LGz.jpg:large" target="_blank">
        Click here for an ugly image
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
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
            'Webpack configuration',
            'Vue DevTools',
            'Stuff gets done faster',
            'React\'s and Angular\'s love child 👨‍❤️‍👨'
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