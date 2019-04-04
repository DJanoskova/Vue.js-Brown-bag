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
      </div>
    </div>
  </div>
</template>

<script>
// import Codemirror from '../../components/Codemirror'
// import ButtonPicker from '../../components/ButtonPicker'
import ValidatingInput from '../../components/ValidatingInput'
import ValidatingButton from '../../components/ValidatingButton'

// import { buttonPickerSource, buttonPickerParentSource } from '../../data';

export default {
  data() {
    return {
      user: {
        username: '',
        age: '',
        email: '',
        about: ''
      }
    }
  },
  components: {
    ValidatingInput,
    ValidatingButton
  }
}
</script>