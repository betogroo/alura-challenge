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
      :value="value"
    >
      <slot></slot>
    </v-text-field>
  </v-hover>
</template>

<script>
import { BaseBtnMixin } from '@/components/base/mixins/BaseBtnMixin.js'
export default {
  mixins: [BaseBtnMixin],

  name: 'BaseTextField',

  props: {
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style></style>
