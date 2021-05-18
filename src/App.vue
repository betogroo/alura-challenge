<template>
  <v-app>
    <v-app-bar
      app
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
     <v-spacer class="d-sm-none d-md-flex"></v-spacer>

      <v-text-field
      class="d-none d-sm-flex"
        label="Busque por algo"
        solo-inverted
        dark
        hide-details
        full-width
      ></v-text-field>
      <v-spacer class="d-sm-none d-md-flex"></v-spacer>
     

      <v-btn class="d-flex d-sm-none" icon dark>
        <v-icon size="32">mdi-magnify</v-icon>
      </v-btn>

      <v-btn class="d-md-none d-xl-none" icon dark>
        <v-icon size="32">mdi-menu</v-icon>
      </v-btn>

      <div class="d-none d-md-flex align-center justify-beetween">
        <v-avatar size="38">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <span class="white--text pl-3">Harry</span>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
<style scoped>
.v-text-field {
  border-radius: 8px;
}
</style>
