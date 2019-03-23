<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-7">
        <Codemirror v-model="formHtml" lang="html" class="mb-2" />
        <Codemirror v-model="formJs" />
      </div>
      <div class="col-12 col-lg-5">

        <form class="mb-3">
          <input type="text" v-model="person.name" placeholder="Name">
          <input type="text" v-model="person.surname" placeholder="Surname">
          <input type="number" v-model="person.age" placeholder="Age">
          <select v-model="person.framework">
            <option value="vue">Vue</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
          </select>
          <label>
            <input type="checkbox" v-model="person.newsletter">
            Receive newsletter
          </label>
        </form>

        <div class="card">
          <pre>{{ person }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Codemirror from '../../components/Codemirror'

import { basicFormHtml, basicFormJs } from '../../data';
import { Person } from '../../models';

export default {
  data () {
    return {
      formHtml: basicFormHtml,
      formJs: basicFormJs,
      person: new Person()
    }
  },
  components: {
    Codemirror
  }
}
</script>
