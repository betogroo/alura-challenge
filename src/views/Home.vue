<template>
  <v-container class="pt-0">
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
    ...mapState(['loggedUser'])
  },

  methods: {
    updateScript(data) {
      this.project.script = data
    },
    updateColor(data) {
      this.project.borderColor = data
    },
    addProject(project) {
      project.id = Date.now()
      project.idUser = this.loggedUser.id
      project.comments = 8
      project.heart = 6
      this.$store.dispatch('addProject', project)
    }
  }
}
</script>
