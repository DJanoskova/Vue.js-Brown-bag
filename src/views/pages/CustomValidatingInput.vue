<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <ValidatingInput v-model="user.name" validate="required" placeholder="Name" />
        <ValidatingInput v-model="user.surname" validate="required" placeholder="Surname" />
        <ValidatingInput v-model="user.age" validate="required|integer" placeholder="Age" />
        <ValidatingInput v-model="user.email" validate="required|email" placeholder="E-mail" />
        <ValidatingInput v-model="user.about" validate="max:11" placeholder="About" />
      </div>
    </div>
  </div>
</template>

<script>
// import Codemirror from '../../components/Codemirror'
// import ButtonPicker from '../../components/ButtonPicker'
import ValidatingInput from '../../components/ValidatingInput'

// import { buttonPickerSource, buttonPickerParentSource } from '../../data';

export default {
  data () {
    return {
      user: {
        name: '',
        surname: '',
        age: null,
        email: '',
        about: ''
      }
    }
  },
  components: {
    ValidatingInput
  }
}
</script>