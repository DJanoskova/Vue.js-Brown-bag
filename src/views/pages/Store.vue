<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <table class="table table-hover table-sm" style="width: 100%">
          <thead>
          <tr>
            <th colspan="2" class="pl-2">
              User
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="pl-2">
              {{ user.name }}
            </td>
            <td class="text-right">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="handleDelete(user.id)">
                Kill
              </button>
            </td>
          </tr>
          </tbody>
        </table>
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
      'USER_CREATE',
      'USER_DELETE'
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
    handleDelete(userId) {
      this.USER_DELETE(userId)
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