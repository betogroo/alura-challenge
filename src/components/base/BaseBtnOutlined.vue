<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      depressed
      :type="type"
      :dark="dark"
      :block="block"
      :color="!hover ? color : colorHover"
      :ripple="false"
      v-on="$listeners"
    >
      <slot />
    </v-btn>
  </v-hover>
</template>

<script>
import { BaseBtnMixins } from '@/components/base/mixins/BaseMixins.js'
export default {
  name: 'BaseButtonOutlined',
  mixins: [BaseBtnMixins],

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
