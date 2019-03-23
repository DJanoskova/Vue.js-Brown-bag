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
<\/script>`