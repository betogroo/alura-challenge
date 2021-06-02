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
      :value="value"
      :label="label"
      @input="updateValue"
    ></v-textarea>
  </v-hover>
</template>

<script>
import {
  BaseFormMixins,
  BaseTextMixins
} from '@/components/base/mixins/BaseMixins.js'

export default {
  name: 'BaseTextArea',
  mixins: [BaseFormMixins, BaseTextMixins]
}
</script>
