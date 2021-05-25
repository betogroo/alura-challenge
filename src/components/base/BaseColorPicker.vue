<template>
  <v-sheet class="pa-2" rounded height="48" color="white">
    <v-menu
      top
      nudge-bottom="105"
      nudge-left="16"
      :close-on-content-click="true"
    >
      <template v-slot:activator="{ on }">
        <v-sheet
          v-on="on"
          class="ma-auto"
          height="32"
          :color="editorBorderColor"
        >
        </v-sheet>
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
  </v-sheet>
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

<style></style>
