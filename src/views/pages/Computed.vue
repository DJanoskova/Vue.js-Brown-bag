<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 col-lg-6">
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
      </div>

      <div class="col-12 col-lg-6">
        Computed name + surname:<br>
        {{ fullName }}
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { reactComputed } from '../../data'

export default {
  data() {
    return {
      model: {
        name: 'Jane',
        middleName: '',
        surname: 'Doe'
      },
      reactComputed
    }
  },
  computed: {
    fullName() {
      console.log('[Computed] Full name proc')
      return this.model.name + ' ' + this.model.surname
    }
  }
}
</script>
