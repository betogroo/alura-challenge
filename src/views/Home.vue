<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" lg="8">
        <editor
          editable
          @input="updateProject"
          :project="project"
          :size="$vuetify.breakpoint.smAndUp ? '302' : '428'"
        />
      </v-col>
      <v-col>
        <form-project @updateColor="updateColor" :project="project" />
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
  },

  computed: {
    ...mapState(['loggedUser'])
  },

  created() {
    this.getLanguage()
  }
}
</script>
