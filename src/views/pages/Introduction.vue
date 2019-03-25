<template>
  <div class="container-fluid">
    <div class="mb-2 text-center">
      <p>
        <button type="button" class="btn btn-outline-primary mr-2" @click="handleIncrement">
          Increment
        </button>
        <button type="button" class="btn btn-outline-danger" @click="handleDecrement">
          Decrement
        </button>
      </p>
      Count: {{ count }}
    </div>
    <hr>
    <div class="row">
      <div class="col-12 col-lg-6 mb-3">
        <Codemirror v-model="sourceHtml" lang="html" class="mb-2" />
      </div>
      <div class="col-12 col-lg-6">
        <Codemirror v-model="sourceJs" />
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