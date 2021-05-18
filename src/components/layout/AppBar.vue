<template>
  <div>
    <v-app-bar
      app
      fixed
      flat
      clipped-left
      color="primary"
      height="100"
      class="rounded-t-xl justify-content-beetween"
    >
      <v-toolbar-title>
        <v-img
          width="180"
          src="https://trello-attachments.s3.amazonaws.com/60a29fb49a600b4353b63879/60a29fb49a600b4353b63898/x/c91b80ab499f30151e362f75bd531dbf/image.png"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.lgAndUp"
      ></v-spacer>

      <template v-if="$vuetify.breakpoint.xsOnly">
        <v-btn icon dark>
          <v-icon size="32">mdi-magnify</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-text-field
          label="Busque por algo"
          solo-inverted
          dark
          hide-details
        ></v-text-field>
      </template>
      <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>

      <template v-if="$vuetify.breakpoint.mdAndDown">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon color="#FFFFFF" size="32">{{
            !drawer ? 'mdi-menu' : 'mdi-close'
          }}</v-icon>
        </v-app-bar-nav-icon>
      </template>
      <template v-else>
        <v-avatar size="38">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <span class="white--text pl-3">Harry</span>
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
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  data: () => ({
    drawer: null,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Account', icon: 'mdi-account-box' },
      { title: 'Admin', icon: 'mdi-gavel' }
    ]
  })
}
</script>

<style scoped>
.v-text-field {
  border-radius: 8px;
}
</style>
