<template>
  <v-hover>
    <v-btn
      class="white--text"
      light
      :block="block"
      :color="color"
      v-ripple="false"
    >
      <slot>{{ text }}</slot>
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    text: {
      type: String,
      default: 'Submit'
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'rgba(80, 129, 251, 0.08)'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
