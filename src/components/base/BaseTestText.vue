<template>
  <v-text-field solo :value="value" @input="updateValue"></v-text-field>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },

  methods: {
    updateValue(data) {
      this.$emit('input', data)
    }
  }
}
</script>

<style></style>
