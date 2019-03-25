<template>
  <div>
    <div class="text-center">
      <p>
        When you prefer alerting the parent instead of passing down the function in props...
        <br>
        <strong>Because why would you do that in the first place?</strong>
      </p>
    </div>

    <div class="text-center mb-3">
      <ButtonsEmit @onFail="handleFail"
        @onSuccess="handleSuccess" />
      <p>
        Successes: {{ successCount }}, Fails: {{ failCount }}
      </p>
    </div>

    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <span class="small text-muted">ChildComponent.vue</span>
        <Codemirror v-model="childComponent" lang="html" />
      </div>
      <div class="col-12 col-md-6">
        <span class="small text-muted">ParentComponent.vue</span>
        <Codemirror v-model="parentComponent" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import Codemirror from '../../components/Codemirror'
import ButtonsEmit from '../../components/ButtonsEmit'

import { parentEmit, childEmit } from '../../data'

export default {
  data() {
    return {
      parentComponent: parentEmit,
      childComponent: childEmit,
      successCount: 0,
      failCount: 0
    }
  },
  methods: {
    handleSuccess () {
      console.log('Yay!')
      this.successCount++
    },
    handleFail (message) {
      console.log('Me no happy!', message)
      this.failCount++
    }
  },
  components: {
    Codemirror,
    ButtonsEmit
  }
}
</script>
