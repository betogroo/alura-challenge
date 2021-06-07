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
        <base-text-field
          v-model="form.search"
          dense
          dark
          label="Busque por algo"
        ></base-text-field>
      </template>
      <template v-if="$vuetify.breakpoint.xsOnly">
        <base-btn-icon
          :icon="!search ? 'magnify' : 'close'"
          @action="toggleSearch"
        />
      </template>

      <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>
      <template v-if="$vuetify.breakpoint.mdAndDown">
        <v-app-bar-nav-icon class="pl-2">
          <base-btn-icon
            :icon="!drawer ? 'menu' : 'close'"
            @action="toggleDrawer"
          />
        </v-app-bar-nav-icon>
      </template>
      <template v-else>
        <v-list flat color="primary" class="pa-0">
          <profile-avatar :user="loggedUser" />
        </v-list>
      </template>
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
            v-for="(item, i) in drawerRouters"
            :key="i"
            :to="{ name: item.name }"
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
                      :style="
                        active ? '' : hover ? 'opacity: 72%;' : 'opacity: 56%;'
                      "
                      v-text="item.meta.title"
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
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
export default {
  name: 'AppBar',

  components: {
    ProfileAvatar
  },

  data: () => ({
    selectedItem: 0,
    search: false,
    drawer: null,
    form: {
      search: ''
    }
  }),

  computed: {
    drawerRouters() {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.inDrawer
      )
    },
    ...mapState(['loggedUser'])
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
      this.search = false
    },
    toggleSearch() {
      this.search = !this.search
    }
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
