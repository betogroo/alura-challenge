<template>
  <v-hover v-slot="{ hover }">
    <v-text-field
      :label="label"
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      dark
      :dense="dense"
      solo
      flat
      hide-details
    ></v-text-field>
  </v-hover>
</template>

<script>
export default {
  name: 'BaseTextField',

  props: {
    label: {
      type: String,
      default: 'Label'
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
