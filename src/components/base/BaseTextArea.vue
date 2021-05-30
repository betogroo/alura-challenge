<template>
  <v-hover v-slot="{ hover }">
    <v-textarea
      solo
      auto-grow
      hide-details
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dark="dark"
      @input="updateValue"
      :value="value"
      :label="label"
    ></v-textarea>
  </v-hover>
</template>

<script>
import {
  BaseFormMixins,
  BaseTextMixins
} from '@/components/base/mixins/BaseMixins.js'

export default {
  mixins: [BaseFormMixins, BaseTextMixins],

  name: 'BaseTextArea'
}
</script>

<style></style>
