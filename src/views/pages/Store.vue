<template>
  <div class="container-fluid">
    <div class="container mb-3">
      <div class="row mb-3">
        <div class="col-12 col-lg-6">
          <UserForm />
        </div>
        <div class="col-12 col-lg-6">
          <UserTable />
        </div>
      </div>
      <hr>
    </div>

    <div class="container mb-3">
      <span class="text-muted">store.js</span>
      <Codemirror v-model="storeSource" />
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <span class="text-muted">UserForm.vue</span>
        <Codemirror v-model="userFormSourceHtml" class="mb-2" lang="html" />
        <Codemirror v-model="userFormSourceJs" />
      </div>
      <div class="col-12 col-lg-6">
        <span class="text-muted">UserTable.vue</span>
        <Codemirror v-model="userTableSourceHtml" class="mb-2" lang="html" />
        <Codemirror v-model="userTableSourceJs" />
      </div>
    </div>
  </div>
</template>

<script>
import { storeSource, userFormSourceHtml, userFormSourceJs, userTableSourceHtml, userTableSourceJs } from '../../data';

import Codemirror from '../../components/Codemirror';
import UserForm from '../../components/UserForm';
import UserTable from '../../components/UserTable';

export default {
  data() {
    return {
      storeSource,
      userFormSourceHtml,
      userFormSourceJs,
      userTableSourceHtml,
      userTableSourceJs
    }
  },
  components: {
    Codemirror,
    UserForm,
    UserTable
  }
}
</script>