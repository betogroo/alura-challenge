<template>
  <v-btn
    v-ripple="false"
    text
    width="38"
    height="38"
    color="white"
    icon
    class="ml-3"
    @click.stop="action"
    v-on="$listeners"
  >
    <v-icon size="32">{{ `mdi-${icon}` }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseBtnIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  methods: {
    action() {
      this.$emit('action')
    }
  }
}
</script>

<style scoped>
.v-btn {
  background-color: transparent;
}
.v-btn:before {
  border-radius: 8px;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.6, 1);
}
.theme--light.v-btn:focus::before {
  opacity: 0.16;
}
</style>
