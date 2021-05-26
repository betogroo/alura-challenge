<template>
  <div>
    <template v-if="$vuetify.breakpoint.mdAndDown">
      <v-app-bar-nav-icon class="pl-2">
        <v-btn
          text
          width="38"
          height="38"
          color="white"
          icon
          @click.stop="toggleDrawer"
          v-ripple="false"
        >
          <v-icon size="30">{{ !drawer ? 'mdi-menu' : 'mdi-close' }}</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
    </template>
    <template v-else>
      <v-list flat color="primary" class="pa-0">
        <profile-avatar :user="loggedUser" />
      </v-list>
    </template>
  </div>
</template>

<script>
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
export default {
  name: 'AppBarRight',

  components: {
    ProfileAvatar
  },

  props: {
    drawer: {
      type: Boolean,
      default: null
    },
    loggedUser: {
      type: Object,
      default: null
    }
  },

  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-icon.v-icon::after {
  border-radius: 16px;
}
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
