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
          @action="goToComments(project.id)"
        ></project-reactions>
        <project-reactions
          reactionType="heart"
          :itemCount="project.heart.length"
          :isActive="isHearted"
          @action="toggleHeart(project.id)"
        ></project-reactions>

        <v-spacer></v-spacer>
        <div>
          <profile-avatar :user="getUser(project.idUser)" />
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
import ProjectReactions from '@/components/layout/ProjectReactions.vue'
import { mapGetters, mapState } from 'vuex'
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

  data: () => ({
    isHearted: false
  }),
  computed: {
    ...mapState(['loggedUser']),
    ...mapGetters(['getHeart'])
    /* isHearted() {
      return this.getHeart(this.project.id, this.loggedUser.id)
    } */
  },

  created() {
    this.isHearted = this.getHeart(this.project.id, this.loggedUser.id)
  },

  methods: {
    getUser(id) {
      const user = this.$store.getters.getUserById(id)
      return user
    },
    goToComments(id) {
      this.$router.push({ name: 'ProjectComments', params: { id: id } })
    },
    toggleHeart(project) {
      const user = this.loggedUser.id
      this.$store.dispatch('toggleHeart', { project, user })
      this.isHearted = this.getHeart(project, user)
    }
  }
}
</script>
