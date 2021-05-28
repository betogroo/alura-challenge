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
        <project-reactions
          reactionType="comments"
          :itemCount="project.comments"
        ></project-reactions>
        <project-reactions
          reactionType="heart"
          :itemCount="project.heart"
        ></project-reactions>

        <v-spacer></v-spacer>
        <div>
          <profile-avatar
            :user="getUser(project.idUser)"
            @click.stop="
              $router.push({ name: 'Editor', params: { id: project.id } })
            "
          />
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
import ProjectReactions from '@/components/layout/ProjectReactions.vue'

export default {
  name: 'ProjectDetails',

  components: {
    ProfileAvatar,
    ProjectReactions
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  methods: {
    getUser(id) {
      const user = this.$store.getters.getUserById(id)
      return user
    }
  }
}
</script>
