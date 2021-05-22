<template>
  <v-hover v-slot="{ hover }">
    <v-list-item :to="{ name: 'Profile' }" :class="hover ? 'hover' : ''">
      <v-list-item-avatar>
        <v-img :src="user.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-title class="white--text">{{
        user.username
      }}</v-list-item-title>
    </v-list-item>
  </v-hover>
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

<style scoped>
.hover {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}
</style>
