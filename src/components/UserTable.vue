<template>
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
        <button type="button"
          class="btn btn-outline-danger btn-sm"
          @click="handleDelete(user.id)">
          Kill
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'USER_DELETE'
    ]),
    handleDelete(userId) {
      this.USER_DELETE(userId)
    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  }
}
</script>