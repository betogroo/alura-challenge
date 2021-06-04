<template>
  <v-hover v-slot="{ hover }">
    <v-select
      return-object
      hide-details
      solo
      item-text="name"
      item-value="id"
      :value="value"
      v-bind="$attrs"
      :items="items"
      :label="label"
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dark="dark"
      :dense="dense"
      @change="updateValue"
    ></v-select>
  </v-hover>
</template>

<script>
import {
  BaseFormMixins,
  BaseTextMixins
} from '@/components/base/mixins/BaseMixins.js'
export default {
  name: 'BaseSelect',
  mixins: [BaseFormMixins, BaseTextMixins],
  inheritAttrs: false,

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  computed: {
    language: {
      get: function () {
        return this.value
      },
      set: function () {}
    }
  }
}
</script>

<style></style>
