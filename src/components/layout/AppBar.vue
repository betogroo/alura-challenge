<template>
  <div>
    <v-app-bar app fixed flat clipped-left color="primary" class="pa-1">
      <v-toolbar-title v-if="!search" class="mr-3">
        <v-img src="../../assets/logo.svg"> </v-img>
      </v-toolbar-title>
      <v-spacer
        v-if="
          ($vuetify.breakpoint.xs || $vuetify.breakpoint.lgAndUp) && !search
        "
      ></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp || search">
        <base-text-field dense label="Busque por algo"></base-text-field>
      </template>
      <template v-if="$vuetify.breakpoint.xsOnly">
        <v-btn @click.stop="search = !search" icon dark class="ml-3">
          <v-icon size="32">{{ !search ? 'mdi-magnify' : 'mdi-close' }}</v-icon>
        </v-btn>
      </template>

      <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>

      <app-bar-right
        :drawer="drawer"
        :loggedUser="loggedUser"
        @toggleDrawer="toggleDrawer"
      ></app-bar-right>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :right="!$vuetify.breakpoint.lgAndUp"
      :style="
        !$vuetify.breakpoint.lgAndUp
          ? `margin-top: ${
              $vuetify.application.top + 1
            }px; margin-right: 10px; border-radius: 8px;`
          : 'background-color: #051d3b'
      "
      color="rgba(45, 65, 91, 1)"
      clipped
      dark
      hide-overlay
      app
    >
      <v-list nav dense flat class="mt-3">
        <v-subheader v-if="$vuetify.breakpoint.lgAndUp">Menu</v-subheader>
        <v-list-item-group :value="selectedItem">
          <v-list-item
            :to="{ name: item.name }"
            v-for="(item, i) in drawerRouters"
            :key="i"
            class="mb-4"
          >
            <template v-slot:default="{ active }">
              <v-hover v-slot="{ hover }">
                <div class="d-flex align-center justify-center">
                  <v-sheet
                    class="d-flex align-center justify-center"
                    :color="
                      active
                        ? 'rgba(80, 129, 251, 1)'
                        : hover
                        ? 'rgba(80, 129, 251, 0.64)'
                        : 'rgba(80, 129, 251, 0.16)'
                    "
                    width="48"
                    height="48"
                    rounded="lg"
                  >
                    <v-icon>mdi-{{ item.meta.icon }}</v-icon>
                  </v-sheet>
                  <v-list-item-content class="menu pl-5">
                    <v-list-item-title
                      v-text="item.meta.title"
                      :style="
                        active ? '' : hover ? 'opacity: 72%;' : 'opacity: 56%;'
                      "
                    />
                  </v-list-item-content>
                </div>
              </v-hover>
            </template>
          </v-list-item>
        </v-list-item-group>
        <template v-if="$vuetify.breakpoint.mdAndDown">
          <v-divider class="mx-4"></v-divider>
          <v-list-item class="mt-4">
            <profile-avatar :user="loggedUser" />
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBarRight from '@/components/layout/AppBarRight.vue'
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
export default {
  name: 'AppBar',

  components: {
    ProfileAvatar,
    AppBarRight
  },

  data: () => ({
    selectedItem: 0,
    search: false
  }),

  methods: {
    toggleDrawer() {
      // this.drawer = !this.drawer
      this.$store.dispatch('toggleDrawer')
      this.search = false
    }
  },

  computed: {
    drawerRouters() {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.inDrawer
      )
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set() {}
    },
    ...mapState(['loggedUser'])
  }
}
</script>

<style scoped>
.drawer-text {
  opacity: 56%;
}
.drawer-text-active {
  opacity: inherit;
}
</style>
