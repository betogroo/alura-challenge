<template>
  <v-hover v-slot="{ hover }">
    <v-card flat dark color="rgba(0, 0, 0, 0.16)" class="pt-0 mx-1">
      <v-card-title class="white--text text-h5-1">
        {{ project.title }}
      </v-card-title>
      <v-card-text class="text-white text-caption-2">
        {{ project.description }}
      </v-card-text>
      <v-card-actions
        v-if="!$vuetify.breakpoint.lgAndUp || hover"
        class="d-flex"
      >
        <div class="mx-2">
          <v-icon small class="mr-1"> mdi-chat </v-icon>
          <span class="text-caption">{{ project.comments }}</span>
        </div>
        <div class="mx-2">
          <v-icon small class="mr-1"> mdi-heart </v-icon>
          <span class="text-caption">{{ project.heart }}</span>
        </div>
        <v-spacer></v-spacer>
        <div>
          <profile-avatar :user="project.user" />
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
export default {
  name: 'ProjectDetails',

  components: {
    ProfileAvatar
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
