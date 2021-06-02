<template>
  <v-hover v-slot="{ hover }">
    <v-text-field
      solo
      flat
      hide-details
      clearable
      v-bind="$attrs"
      :value="value"
      :label="label"
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dense="dense"
      :dark="dark"
      @input="updateValue"
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
  name: 'BaseTextField',
  mixins: [BaseFormMixins, BaseTextMixins],
  inheritAttrs: false
}
</script>
