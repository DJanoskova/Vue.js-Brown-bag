<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6">
        <Codemirror v-model="source" />
      </div>
      <div class="col-12 col-lg-6 text-center">
        <div class="card">
          Using default format
          <Clock />
        </div>
        <div class="card">
          dddd, DD.MM. HH:mm
          <Clock format="dddd, DD.MM. HH:mm" />
        </div>
        <div class="card">
          DD.MM.YYYY, HH:mm
          <Clock format="DD.MM.YYYY, HH:mm" />
        </div>
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
      source: customComponentSource
    }
  },
  components: {
    Codemirror,
    Clock
  }
}
</script>