<template>
  <v-container class="pt-0">
    <v-overlay :value="loading" light>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar v-model="snackbar">
      Gravado com sucesso
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="closeSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-row>
      <v-col cols="12" lg="8">
        <editor
          editable
          :project="project"
          :size="$vuetify.breakpoint.smAndUp ? '302' : '428'"
          @input="updateScript"
        />
      </v-col>
      <v-col>
        <form-project
          :project="project"
          @updateColor="updateColor"
          @action="addProject(project)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@/components/Editor.vue'
import FormProject from '@/components/FormProject.vue'
export default {
  name: 'Home',

  components: {
    Editor,
    FormProject
  },

  data: () => ({
    project: {
      script: ''
    }
  }),

  computed: {
    ...mapState(['loggedUser', 'loading', 'snackbar'])
  },

  methods: {
    updateScript(data) {
      this.project.script = data
    },
    updateColor(data) {
      this.project.borderColor = data
    },
    closeSnackbar() {
      this.$store.dispatch('setSnackbar', false)
    },
    async addProject(project) {
      project.id = Date.now()
      project.idUser = this.loggedUser.id
      project.comments = []
      project.heart = []
      await this.$store.dispatch('addProject', project)
      this.$router.replace({ name: 'Project', params: { id: project.id } })
    }
  }
}
</script>
