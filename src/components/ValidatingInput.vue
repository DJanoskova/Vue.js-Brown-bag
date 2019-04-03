<template>
  <div class="mb-2">
    <input :type="type"
      :name="name"
      v-validate="validate"
      data-vv-name="name"
      data-vv-as=" "
      :placeholder="placeholder"
      class="form-control">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    validate: {
      type: String || Object
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      model: this.value
    }
  },
  watch: {
    value () {
      this.model = this.value
    },
    model () {
      this.$emit('input', this.value)
    }
  }
}
</script>
