<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      class="mr-2"
      depressed
      :type="type"
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
  name: 'BaseButtonFilled',
  mixins: [BaseBtnMixins],

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
  box-shadow: 0px 0px 0px 4px rgba(80, 129, 251, 0.72);
}
</style>
