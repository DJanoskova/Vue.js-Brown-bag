import React from "react";

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
      <input type="text" :value={person.surname} onChange={e => handlePersonChange(e, 'surname'} />
      <input type="number" :value={person.age} onChange={e => handlePersonChange(e, 'age'} />
      <select :value={person.framework} onChange={e => handlePersonChange(e, 'framework'}>
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