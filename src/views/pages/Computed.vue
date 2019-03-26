<template>
  <div class="container-fluid">

    <ButtonPicker v-model="view"
      class="mb-2"
      :data="[{title: 'Vue way', value: 'vue'}, {title: 'React way', value: 'react'}]" />

    <div class="row">

      <div class="col-12 col-lg-5">
        <form>
          <input class="form-control mb-2"
            type="text"
            v-model="model.name"
            placeholder="Name" />
          <input class="form-control mb-2"
            type="text"
            v-model="model.middleName"
            placeholder="Middle name" />
          <input class="form-control mb-2"
            type="text"
            v-model="model.surname"
            placeholder="Surname" />
        </form>

        <pre>{{ model }}</pre>

        <p>
          Computed name + surname:<br>
          {{ fullName }}
        </p>
      </div>

      <div class="col-12 col-lg-7">
        <template v-if="view === 'vue'">
          <Codemirror v-model="vueComputedHtml" lang="html" class="mb-2" />
          <Codemirror v-model="vueComputedJs" />
        </template>
        <template v-else>
          <p>
            <a href="https://jsfiddle.net/8x7cg0v1/1/" target="_blank">
              https://jsfiddle.net/8x7cg0v1/1/
            </a>
          </p>
          <Codemirror v-model="reactComputed" />
        </template>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { reactComputed, vueComputedHtml, vueComputedJs } from '../../data'

import Codemirror from '../../components/Codemirror'
import ButtonPicker from '../../components/ButtonPicker'

export default {
  data() {
    return {
      model: {
        name: 'Jane',
        middleName: '',
        surname: 'Doe'
      },
      reactComputed,
      vueComputedHtml,
      vueComputedJs,
      view: 'vue'
    }
  },
  computed: {
    fullName() {
      console.log('[Computed] Full name proc')
      return this.model.name + ' ' + this.model.surname
    }
  },
  components: {
    ButtonPicker,
    Codemirror
  }
}
</script>
