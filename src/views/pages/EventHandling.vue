<template>
  <div class="container">
    <div v-for="example in examples" :key="example.code">
      <span class="small text-muted">
        {{ example.description }}
      </span>
      <pre>{{ example.code }}</pre>
    </div>

    <p>
      <a href="https://vuejs.org/v2/guide/events.html" target="_blank">
        Read more
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      examples: [
        {
          code: '<button @click.stop="doThis"></button>',
          description: 'Stop propagation on event'
        },
        {
          code: '<form @submit.prevent="onSubmit"></form>',
          description: 'Prevent default on event'
        },
        {
          code: '<input @keyup.enter="onSubmit">',
          description: 'Call onSubmit upon enter keypress in input'
        },
        {
          code: '<MyComponent @keydown.native.esc="handleExit" />',
          description: 'Call any event in your custom component using .native'
        }
      ]
    }
  }
}
</script>