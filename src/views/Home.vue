<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" lg="8">
        <editor
          editable
          :project="project"
          :size="$vuetify.breakpoint.smAndUp ? '302' : '428'"
          @input="updateProject"
        />
      </v-col>
      <v-col>
        <form-project :project="project" @updateColor="updateColor" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@/components/Editor.vue'
import FormProject from '@/components/FormProject.vue'
export default {
  name: 'ViewHome',

  components: {
    Editor,
    FormProject
  },

  props: {
    id: {
      type: [String, Number],
      default: 1
    }
  },

  data: () => ({
    project: {
      script: ''
    }
  }),

  computed: {
    ...mapState(['loggedUser'])
  },

  created() {
    this.getLanguage()
  },

  methods: {
    getLanguage() {
      this.project.language = this.$store.getters.getLanguageByProjectId(
        this.project.idLanguage || 1
      )
    },
    updateProject(data) {
      this.project.script = data
    },
    updateColor(data) {
      this.project.borderColor = data
    }
  }
}
</script>
