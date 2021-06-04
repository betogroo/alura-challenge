<template>
  <v-card dark class="colorpicker" flat>
    <v-menu top :close-on-content-click="true">
      <template v-slot:activator="{ on }">
        <v-row>
          <v-col v-if="label && label !== ''" cols="3">
            <v-card-title class="d-flex align-center">{{ label }}</v-card-title>
          </v-col>
          <v-col>
            <v-card rounded="lg" height="34" :color="color" v-on="on"></v-card>
          </v-col>
        </v-row>
      </template>
      <v-color-picker
        v-bind="$attrs"
        dot-size="25"
        hide-mode-switch
        mode="hexa"
        swatches-max-height="250"
        :value="color"
        @input="updateValue"
      ></v-color-picker>
    </v-menu>
  </v-card>
</template>

<script>
import {
  BaseFormMixins,
  BaseTextMixins
} from '@/components/base/mixins/BaseMixins.js'
export default {
  name: 'BaseColorPicker',
  mixins: [BaseFormMixins, BaseTextMixins],
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: '#FFFFFF'
    }
  },

  methods: {
    updateValue(data) {
      this.$emit('input', data)
    }
  }
}
</script>

<style>
.colorpicker {
  height: 48px;
  padding: 6px;
  background-color: #051d3b !important;
  border: 1px solid white !important;
  border-radius: 8px !important;
}
</style>
