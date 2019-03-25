<template>
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
</script>
