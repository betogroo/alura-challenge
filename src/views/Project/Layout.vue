<template>
  <v-container class="pt-0">
    <div v-if="project">
      <router-view :project="project" />
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProjectLayout',

  props: {
    id: {
      type: [String, Number],
      default: 1
    }
  },

  computed: {
    ...mapState(['loggedUser']),
    project() {
      return this.getProject(this.id)
    }
  },

  methods: {
    getProject(id) {
      return this.$store.getters.getProjectById(id)
    }
  }
}
</script>
