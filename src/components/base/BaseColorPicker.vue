<template>
  <v-card class="colorpicker" flat>
    <v-menu
     top
      :close-on-content-click="true"
    >
      <template v-slot:activator="{ on }">
        <v-card rounded="lg" v-on="on" height="34" :color="editorBorderColor">
        </v-card>
      </template>
      <v-color-picker
        v-model="color"
        hide-inputs
        @input="changeEditorBorderColor(color)"
        dot-size="25"
        hide-mode-switch
        mode="hexa"
        swatches-max-height="250"
      ></v-color-picker>
    </v-menu>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseColorPicker',

  data: () => ({
    color: '#6BD1FF'
  }),

  computed: {
    ...mapState(['editorBorderColor'])
  },

  methods: {
    changeEditorBorderColor(color) {
      this.$store.dispatch('changeEditorBorderColor', color)
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
