<template>
  <div>
    <v-app-bar
      app
      fixed
      flat
      clipped-left
      color="primary"
      height="80"
      class="rounded-t-xl justify-content-beetween"
    >
      <v-toolbar-title v-if="!search">
        <v-img
          width="180"
          src="https://trello-attachments.s3.amazonaws.com/60a29fb49a600b4353b63879/60a29fb49a600b4353b63898/x/c91b80ab499f30151e362f75bd531dbf/image.png"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer
        v-if="
          ($vuetify.breakpoint.xs || $vuetify.breakpoint.lgAndUp) && !search
        "
      ></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp || search">
        <v-text-field
          label="Busque por algo"
          solo-inverted
          dark
          hide-details
        ></v-text-field>
      </template>
      <template v-if="$vuetify.breakpoint.xsOnly">
        <v-btn @click.stop="search = !search" icon dark class="ml-3">
          <v-icon size="32">{{ !search ? 'mdi-magnify' : 'mdi-close' }}</v-icon>
        </v-btn>
      </template>

      <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>

      <template v-if="$vuetify.breakpoint.mdAndDown">
        <v-app-bar-nav-icon @click.stop="toggleDrawer">
          <v-icon color="#FFFFFF" size="32">{{
            !drawer ? 'mdi-menu' : 'mdi-close'
          }}</v-icon>
        </v-app-bar-nav-icon>
      </template>
      <template v-else>
        <v-list color="primary">
          <profile-avatar :loggedUser="loggedUser" />
        </v-list>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :right="!$vuetify.breakpoint.lgAndUp"
      :style="
        !$vuetify.breakpoint.lgAndUp
          ? `margin-top: ${$vuetify.application.top}px; margin-right: 8px; border-radius: 8px;`
          : 'background-color: #051d3b'
      "
      color="rgba(45, 65, 91, 1)"
      clipped
      dark
      hide-overlay
      app
    >
      <v-list nav dense class="mt-3">
        <v-list-item v-for="item in items" :key="item.title" link class="mb-4">
          <v-btn fab medium color="#5081FB">
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
          <v-list-item-content class="menu pl-5">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <template v-if="$vuetify.breakpoint.mdAndDown">
          <v-divider class="mx-4"></v-divider>
          <v-list-item class="mt-4">
            <profile-avatar :loggedUser="loggedUser" />
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
export default {
  name: 'AppBar',

  components: {
    ProfileAvatar
  },

  data: () => ({
    drawer: null,
    search: false,
    items: [
      { title: 'Editor de Código', icon: 'mdi-xml', img: 'editor.png' },
      { title: 'Comunidade', icon: 'mdi-account-group', img: 'comunity.png' }
    ],
    loggedUser: {
      username: 'betogroo',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
    }
  }),

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
      this.search = false
    }
  }
}
</script>

<style scoped>
.v-text-field {
  border-radius: 8px;
}
.v-btn--round {
  border-radius: 30%;
}
.menu {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
