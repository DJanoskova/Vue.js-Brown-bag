<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-8 mb-3">
        <Codemirror v-model="sourceHtml" lang="html" class="mb-2" />
        <Codemirror v-model="sourceJs" />
      </div>
      <div class="col-12 col-lg-4 text-center">
        <div class="mb-2">
          <button type="button" class="btn btn-primary mr-2" @click="handleIncrement">
            Increment
          </button>
          <button type="button" class="btn btn-primary" @click="handleDecrement">
            Decrement
          </button>
        </div>
        Count: {{ count }}
      </div>
    </div>
  </div>
</template>

<script>
import { introductionSourceHtml, introductionSourceJs } from '../../data'

import Codemirror from '../../components/Codemirror'

export default {
  data() {
    return {
      count: 1,
      sourceHtml: introductionSourceHtml,
      sourceJs: introductionSourceJs
    }
  },
  methods: {
    handleIncrement() {
      this.count++
    },
    handleDecrement() {
      this.count--
    }
  },
  components: {
    Codemirror
  }
}
</script>