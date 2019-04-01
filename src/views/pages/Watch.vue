<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 col-lg-6">
        <div class="mb-2">
          <router-link tag="button"
            :to="{name: 'watch', query: {animal: 'snail'}}"
            class="btn btn-primary mr-1">
            Snail
          </router-link>
          <router-link tag="button"
            :to="{name: 'watch', query: {animal: 'ladybug'}}"
            class="btn btn-primary mr-1">
            Ladybug
          </router-link>
          <router-link tag="button"
            :to="{name: 'watch', query: {animal: 'wasp'}}"
            class="btn btn-primary mr-1">
            Wasp
          </router-link>
          <router-link tag="button"
            :to="{name: 'watch', query: {animal: 'sloth'}}"
            class="btn btn-primary">
            Sloth
          </router-link>
        </div>

        <ul>
          <li v-for="(animal, index) in visited" :key="index">
            {{ animal }}
          </li>
        </ul>

        <pre>
watch: {
  '$route'() {
    console.log(this.$route.query)
    this.visited.push(this.$route.query.animal)
  }
}
        </pre>
      </div>

      <div class="col-12 col-lg-6">
        <ButtonPicker v-model="view" :data="views" />
        <p>{{ view }}</p>

        <pre>watch: {
  view () {
    console.log('The view has been changed!', this.view)
  }
}</pre>
      </div>
    </div>

    <h5>Watch in React</h5>
    <Codemirror v-model="reactUseEffect" />
  </div>
</template>

<script>
/* eslint-disable no-console */
import { reactUseEffect } from '../../data'

import ButtonPicker from '../../components/ButtonPicker'
import Codemirror from '../../components/Codemirror'

export default {
  data() {
    return {
      visited: [],
      view: 'first',
      views: [
        { value: 'first', title: 'First view' },
        { value: 'second', title: 'Second view' },
        { value: 'third', title: 'Third view' }
      ],
      reactUseEffect
    }
  },
  methods: {
    handleSuccess() {
      this.successCount++
    },
    handleFail() {
      this.failCount++
    }
  },
  watch: {
    '$route'() {
      console.log(this.$route.query)
      this.visited.push(this.$route.query.animal)
    },
    view() {
      console.log('The view has been changed!', this.view)
    }
  },
  components: {
    ButtonPicker,
    Codemirror
  }
}
</script>
