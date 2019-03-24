<template>
  <div>
    <div class="text-center">
      <p>
        When you prefer alerting the parent instead of passing down the function in props...
        <br>
        <strong>Because why would you do that in the first place?</strong>
      </p>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <span class="small text-muted">ParentComponent.vue</span>
        <Codemirror v-model="parentComponent" />
      </div>
      <div class="col-12 col-md-6">
        <span class="small text-muted">ChildComponent.vue</span>
        <Codemirror v-model="childComponent" lang="html" />
      </div>
    </div>
  </div>
</template>

<script>
import Codemirror from '../../components/Codemirror'

import { parentEmit, childEmit } from '../../data'

export default {
  components: { Codemirror },
  data () {
    return {
      parentComponent: parentEmit,
      childComponent: childEmit
    }
  }
}
</script>
