<template>
  <v-list-item dark>
    <v-list-item-avatar>
      <v-img :src="user.avatar"></v-img>
    </v-list-item-avatar>

    <v-list-item-title>{{ user.username }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: 'ProfileAvatar',

  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
