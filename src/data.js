export const basicFormHtml = `<template>
  <form>
    <input type="text" v-model="person.name">
    <input type="text" v-model="person.surname">
    <input type="number" v-model="person.age">
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
</template>`

export const basicFormJs = `<script>
export default {
  data () {
    return {
      person: {
        name: '',
        surname: '',
        age: 20,
        framework: 'vue',
        newsletter: false
      }
    }
  }
}
</script>`

export const basicFormReact1 = `const awesomeForm = () => {
  const [person, setPerson] = useState({
    name: '',
    surname: '',
    age: 20,
    framework: 'vue',
    newsletter: false
  });
  
  const handlePersonChange = change => {
    setPerson({
      ...person,
      ...change
    })
  };
  
  const handleNameChange = ({target}) => handlePersonChange({name: target.value});
  const handleSurnameChange = ({target}) => handlePersonChange({surname: target.value});
  const handleAgeChange = ({target}) => handlePersonChange({age: target.value});
  const handleFrameworkChange = ({target}) => handlePersonChange({framework: target.value});
  const handleNewsletterChange = ({target}) => handlePersonChange({newsletter: target.value});

  return (
    <form>
      <input type="text" :value={person.name} onChange={handleNameChange} />
      <input type="text" :value={person.surname} onChange={handleSurnameChange} />
      <input type="number" :value={person.age} onChange={handleAgeChange} />
      <select :value={person.framework} onChange={handleFrameworkChange}>
        <option value="vue">Vue</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
      </select>
      <label>
        <input type="checkbox" value={person.newsletter} onChange={handleNewsletterChange}>
        Receive newsletter
      </label>
    </form>
  );
}
`

export const basicFormReact2 = `const awesomeForm = () => {
  const [person, setPerson] = useState({
    name: '',
    surname: '',
    age: 20,
    framework: 'vue',
    newsletter: false
  });
  
  const handlePersonChange = ({target}, property) => {
    setPerson({
      ...person,
      [property]: target.value
    })
  };

  return (
    <form>
      <input type="text" :value={person.name} onChange={e => handlePersonChange(e, 'name')} />
      <input type="text" :value={person.surname} onChange={e => handlePersonChange(e, 'surname')} />
      <input type="number" :value={person.age} onChange={e => handlePersonChange(e, 'age')} />
      <select :value={person.framework} onChange={e => handlePersonChange(e, 'framework')}>
        <option value="vue">Vue</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
      </select>
      <label>
        <input type="checkbox" value={person.newsletter} onChange={e => handlePersonChange(e, 'newsletter'}>
        Receive newsletter
      </label>
    </form>
  );
}
`

export const parentEmit = `<template>
  <ChildComponent
    @onSuccess="handleSuccess"
    @onFail="handleFail" />
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  methods: {
    handleSuccess () {
      console.log('Yay!')
    },
    handleFail (message) {
      console.log('Me no happy!', message)
    }
  },
  components: {
    ChildComponent
  }
}
</script>`

export const childEmit = `<template>
  <p>
    <button type="button" @click="$emit('onSuccess')">
      Success
    </button>
    <button type="button" @click="alertFail">
      Fail
    </button>
  </p>
</template>

<script>
export default {
  methods: {
    alertFail () {
      this.$emit('onFail', 'This is your failure payload')
    }
  }
}
</script>`

export const buttonPickerSource = `<template>
  <div>
    <button v-for="instance in data"
      type="button"
      :key="instance.label"
      @click="model = instance.value"
      :class="{active: model === instance.value}">
      {{ instance.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      model: this.value
    }
  },
  watch: {
    model () {
      this.$emit('input', this.model)
    }
  }
}
</script>`

export const buttonPickerParentSource = `<template>
  <ButtonPicker v-model="flower" :data="options" />
</template>

<script>
export default {
  data () {
    return {
      flower: 'rose',
      options: [
        {
          title: 'Rose', value: 'rose'
        },
        {
          title: 'Lily', value: 'lily'
        },
        {
          title: 'Sunflower', value: 'sunflower'
        },
        {
          title: 'Cactus', value: 'they-are-beautiful-too'
        }
      ]
    }
  }
}
</script>`

export const introductionSourceHtml = `<template>
  <div>
    <div class="text-center">
      <button type="button" @click="handleIncrement">
        Increment
      </button>
      <button type="button" @click="handleDecrement">
        Decrement
      </button>
    </div>
    {{ count }}
  </div>
</template>`

export const introductionSourceJs = `<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    handleIncrement() {
      this.count++
    },
    handleDecrement() {
      this.count--
    }
  }
}
</script>`

export const customComponentSource = `<template>
  <div class="counter">
    {{ displayedTime }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    format: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  data() {
    return {
      currentTime: moment(),
      counter: null
    }
  },
  computed: {
    displayedTime() {
      console.log('[Clock] Computed function')
      return this.currentTime.format(this.format)
    }
  },
  created() {
    this.counter = setInterval(() => {
      this.currentTime = moment()
    }, 1000);
  },
  beforeDestroy () {
    clearInterval(this.counter);
  }
}
</script>

<style scoped>
.counter {
  font-size: 2.5rem;
  font-family: Georgia, serif;
}
</style>`

export const storeSource = `import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { findIndex, find } from 'lodash'

import { objectToArray } from './utils';

Vue.use(Vuex)

axios.defaults.baseURL = 'https://vue-brown-bag.firebaseio.com/'

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    USERS_SET(state, users) {
      state.users = users
    },
    USER_ADD(state, user) {
      state.users.push(user)
    },
    USER_REMOVE(state, userId) {
      const index = findIndex(state.users, { id: userId })
      state.users.splice(index, 1)
    }
  },
  actions: {
    async USERS_GET (context) {
      try {
        const response = await axios.get('/users.json')
        const normalized = objectToArray(response.data)
        context.commit('USERS_SET', normalized)
        return response.data
      } catch(e) {
        throw e
      }
    },
    async USER_CREATE (context, user) {
      try {
        const response = await axios.post('/users.json', user)
        const id = response.data.name
        const newUser = {
          id,
          ...user
        }
        context.commit('USER_ADD', newUser)
        return newUser
      } catch(e) {
        throw e
      }
    },
    async USER_DELETE (context, userId) {
      try {
        await axios.delete('/users/' + userId + '.json')
        context.commit('USER_REMOVE', userId)
      } catch(e) {
        throw e
      }
    }
  },
  getters: {
    users (state) {
      return state.users
    },
    user (state, userId) {
      return find(state.users, { id: userId })
    }
  }
})`

export const userFormSourceHtml = `<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="model.name">
    <input type="password" v-model="model.password">
    <button type="submit"
      :disabled="!model.name || !model.password">
      Save
    </button>
  </form>
</template>`

export const userFormSourceJs = `<script>
import { mapActions } from 'vuex'

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
  mounted() {
    this.USERS_GET()
  }
}
</script>`

export const userTableSourceHtml = `<template>
  <table>
    <tr v-for="user in users" :key="user.id">
      <td>
        {{ user.name }}
      </td>
      <td>
        <button type="button"
          @click="handleDelete(user.id)">
          Kill
        </button>
      </td>
    </tr>
  </table>
</template>`

export const userTableSourceJs = `<script>
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
</script>`