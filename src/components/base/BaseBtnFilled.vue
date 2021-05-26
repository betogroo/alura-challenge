<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      depressed
      :block="block"
      :color="!hover ? color : colorHover"
      :ripple="false"
    >
      <slot>{{ text }}</slot>
    </v-btn>
  </v-hover>
</template>

<script>
import { BaseBtnMixin } from '@/components/base/mixins/BaseBtnMixin.js'

export default {
  mixins: [BaseBtnMixin],

  name: 'BaseButtonFilled',

  props: {
    color: {
      type: String,
      default: '#5081FB'
    },
    colorHover: {
      type: String,
      default: '#7BA4FC'
    }
  }
}
</script>
<style lang="scss" scoped>
.v-btn::before {
  background-color: transparent;
}
v.btn:focus {
  background-color: #96b9fd;
}
.v-btn:active {
  //transition: box-shadow 0.1s ease-in-out;
  box-shadow: 0px 0px 0px 4px rgba(80, 129, 251, 0.72);
}
</style>
