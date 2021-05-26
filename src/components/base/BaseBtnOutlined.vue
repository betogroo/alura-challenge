<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      depressed
      :dark="dark"
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

  name: 'BaseButtonOutlined',

  props: {
    color: {
      type: String,
      default: 'rgba(80, 129, 251, 0.08)'
    },
    colorHover: {
      type: String,
      default: 'rgba(80, 129, 251, 0.16)'
    }
  }
}
</script>
<style lang="scss" scoped>
.v-btn::before {
  background-color: transparent;
}
.v-btn:active {
  //transition: box-shadow 2s ease-in-out;
  box-shadow: 0px 0px 0px 4px rgba(80, 129, 251, 0.24);
}
</style>
