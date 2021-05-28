<template>
  <v-hover v-slot="{ hover }">
    <v-select
      v-model="language"
      :items="items"
      item-text="name"
      item-value="id"
      hide-details
      solo
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dark="dark"
      :dense="dense"
    ></v-select>
  </v-hover>
</template>

<script>
import { BaseBtnMixin } from '@/components/base/mixins/BaseBtnMixin.js'
export default {
  mixins: [BaseBtnMixin],

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
