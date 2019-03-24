<template>
  <div class="container-fluid">

    <div class="mb-2">
      <button type="button"
        class="btn btn-primary mr-2"
        :class="{active: way === 'vue'}"
        @click="way = 'vue'">
        Vue way
      </button>
      <button type="button"
        class="btn btn-primary"
        :class="{active: way === 'react'}"
        @click="way = 'react'">
        React way
      </button>
    </div>

    <div class="row" v-if="way === 'vue'">
      <div class="col-12 col-md-7">
        <Codemirror v-model="formHtml" lang="html" class="mb-2" />
        <Codemirror v-model="formJs" />
      </div>
      <div class="col-12 col-md-5">

        <div class="card mb-3 p-4">
          <form>
            <input type="text" v-model="person.name" placeholder="Name" class="form-control mb-2">
            <input type="text" v-model="person.surname" placeholder="Surname" class="form-control mb-2">
            <input type="number" v-model="person.age" placeholder="Age" class="form-control mb-2">
            <select v-model="person.framework" class="form-control mb-2">
              <option value="vue">Vue</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
            </select>
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-model="person.newsletter">
                Receive newsletter
              </label>
            </div>
          </form>
        </div>

        <div class="card">
          <pre>{{ person }}</pre>
        </div>
      </div>
    </div>
    <template v-else>
      <Codemirror v-model="formReact1" class="mb-2" />
      <Codemirror v-model="formReact2" />
    </template>

  </div>
</template>

<script>
import Codemirror from '../../components/Codemirror'

import { basicFormHtml, basicFormJs, basicFormReact1, basicFormReact2 } from '../../data';
import { Person } from '../../models';

export default {
  data () {
    return {
      formHtml: basicFormHtml,
      formJs: basicFormJs,
      formReact1: basicFormReact1,
      formReact2: basicFormReact2,
      person: new Person(),
      way: 'vue'
    }
  },
  components: {
    Codemirror
  }
}
</script>
