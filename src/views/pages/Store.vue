<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6">
        Users:
        <pre>{{ users }}</pre>
      </div>
      <div class="col-12 col-lg-6">
        <form @submit.prevent="handleSubmit">
          <input class="form-control mb-2" placeholder="Name" v-model="model.name">
          <input class="form-control mb-2" placeholder="Password" type="password" v-model="model.password">
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      model: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'USERS_GET',
      'USER_CREATE'
    ]),
    async handleSubmit() {
      try {
        const response = await this.USER_CREATE(this.model)
        console.log('New user has been created!', response)
        this.resetModel()
      } catch (e) {
        console.log('Error', e)
      }
    },
    resetModel() {
      this.model.name = ''
      this.model.password = ''
    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  mounted() {
    this.USERS_GET()
  }
}
</script>