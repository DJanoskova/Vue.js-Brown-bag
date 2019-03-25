<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6 mb-3">
        <pre>{{ script }}</pre>
        <br>
        <div class="card">
          <pre>{{ clock1 }}</pre>
          <Clock />
        </div>
        <div class="card">
          <pre>{{ clock2 }}</pre>
          <Clock format="dddd, DD. MMMM" />
        </div>
        <div class="card">
          <pre>{{ clock3 }}</pre>
          <Clock format="DD.MM.YYYY, HH:mm" />
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <Codemirror v-model="source" />
      </div>
    </div>
  </div>
</template>

<script>
import { customComponentSource } from '../../data'

import Codemirror from '../../components/Codemirror'

import Clock from '../../components/Clock'

export default {
  data() {
    return {
      source: customComponentSource,
      clock1: '<Clock />',
      clock2: '<Clock format="dddd, DD. MMMM" />',
      clock3: '<Clock format="DD.MM.YYYY, HH:mm" />',
      script: `<script>
import Clock from './components/Clock'

export default {
  components: {
    Clock
  }
}
<\/script>`
    }
  },
  components: {
    Codemirror,
    Clock
  }
}
</script>