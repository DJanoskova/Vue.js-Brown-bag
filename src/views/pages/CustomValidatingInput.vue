<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-6">

        <ValidatingInput v-model="user.username" validate="required|min:4" placeholder="Username" name="username" />
        <ValidatingInput v-model="user.age" validate="required|integer" placeholder="Age" name="age" />
        <ValidatingInput v-model="user.email" validate="required|email" placeholder="E-mail" name="email" />
        <ValidatingInput v-model="user.about" validate="max:50" placeholder="About" name="about" />
        <ValidatingButton class="">Submit</ValidatingButton>

        <hr />

        <pre>{{ user }}</pre>

        <Codemirror v-model="validatingInputsExample" lang="html" />
      </div>

      <div class="col-12 col-lg-6">
        <div class="text-muted mb-1">
          main.js
        </div>
        <pre>import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)</pre>

        <div class="text-muted mb-1">
          ValidatingInput.vue
        </div>
        <Codemirror v-model="validatingInputSource" />

        <div class="text-muted mb-1 mt-2">
          ValidatingButton.vue
        </div>
        <Codemirror v-model="validatingButtonSource" />
      </div>
    </div>
  </div>
</template>

<script>
import Codemirror from '../../components/Codemirror'
import ValidatingInput from '../../components/ValidatingInput'
import ValidatingButton from '../../components/ValidatingButton'

import { validatingInputsExample, validatingInputSource, validatingButtonSource } from '../../data';

export default {
  data() {
    return {
      user: {
        username: '',
        age: '',
        email: '',
        about: ''
      },
      validatingInputsExample,
      validatingInputSource,
      validatingButtonSource
    }
  },
  components: {
    ValidatingInput,
    ValidatingButton,
    Codemirror
  }
}
</script>