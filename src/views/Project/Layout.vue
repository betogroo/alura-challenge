<template>
  <v-container class="pt-0">
    <router-link :to="{ name: 'ProjectEdit' }"><v-btn>Editar</v-btn></router-link>
    <router-view :project="project" />
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
