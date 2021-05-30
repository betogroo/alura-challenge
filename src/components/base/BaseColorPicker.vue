<template>
  <v-card class="colorpicker" flat>
    <v-menu top :close-on-content-click="true">
      <template v-slot:activator="{ on }">
        <v-card rounded="lg" v-on="on" height="34" :color="color">
        </v-card>
      </template>
      <v-color-picker
        :value="color"
        hide-inputs
        
        dot-size="25"
        hide-mode-switch
        mode="hexa"
        swatches-max-height="250"
      ></v-color-picker>
    </v-menu>
  </v-card>
</template>

<script>
export default {
  name: 'BaseColorPicker',

  props: {
    color: {
      type: String,
      default: 'white'
    }
  },

  methods: {
    changeColor(color) {
      alert(color)
    }
  }
}
</script>

<style>
.colorpicker {
  height: 48px;
  padding: 6px;
  background-color: #051d3b !important;
  border: 1px solid white;
  border-radius: 8px !important;
}
</style>
