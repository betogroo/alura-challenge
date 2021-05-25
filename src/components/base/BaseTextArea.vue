<template>
  <v-hover v-slot="{ hover }">
    <v-textarea
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      dark
      solo
      auto-grow
      :value="value"
    ></v-textarea>
  </v-hover>
</template>

<script>
export default {
  name: 'BaseTextArea',

  props: {
    value: {
      type: String,
      default: 'Text Area'
    }
  }
}
</script>

<style></style>
