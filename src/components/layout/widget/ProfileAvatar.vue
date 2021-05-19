<template>
  <v-list-item dark>
    <v-list-item-avatar>
      <v-img :src="loggedUser.avatar"></v-img>
    </v-list-item-avatar>

    <v-list-item-title>{{ loggedUser.username }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: 'ProfileAvatar',

  props: {
    loggedUser: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
