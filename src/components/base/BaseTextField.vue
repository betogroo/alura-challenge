<template>
  <v-hover v-slot="{ hover }">
    <v-text-field
      solo
      flat
      hide-details
      clearable
      @input="updateValue"
      :value="value"
      :label="label"
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dense="dense"
      :dark="dark"
    >
    </v-text-field>
  </v-hover>
</template>

<script>
import {
  BaseFormMixins,
  BaseTextMixins
} from '@/components/base/mixins/BaseMixins.js'
export default {
  mixins: [BaseFormMixins, BaseTextMixins],

  name: 'BaseTextField'
}
</script>

<style></style>
