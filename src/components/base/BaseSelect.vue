<template>
  <v-hover v-slot="{ hover }">
    <v-select
      hide-details
      solo
      item-text="name"
      item-value="id"
      :value="value"
      v-bind="$attrs"
      @change="updateValue"
      :items="items"
      :label="label"
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dark="dark"
      :dense="dense"
    ></v-select>
  </v-hover>
</template>

<script>
import {
  BaseFormMixins,
  BaseTextMixins
} from '@/components/base/mixins/BaseMixins.js'
export default {
  inheritAttrs: false,

  mixins: [BaseFormMixins, BaseTextMixins],

  name: 'BaseSelect',

  props: {
    items: {
      type: Array,
      required: true
    },
    item: Object
  },

  computed: {
    language: {
      get: function () {
        return this.item
      },
      set: function () {}
    }
  }
}
</script>

<style></style>
