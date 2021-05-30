<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" lg="8">
        <editor
          editable
          :project="project"
          :size="$vuetify.breakpoint.smAndUp ? '302' : '428'"
        />
        <div class="mt-5 mx-1">
          <base-btn-outlined dark block
            >Visualizar com o Highlight
          </base-btn-outlined>
        </div>
      </v-col>
      <v-col>
        <form-project :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@/components/Editor.vue'
import FormProject from '@/components/FormProject.vue'
export default {
  name: 'ViewEditor',

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

  methods: {
    getProject(id) {
      return this.$store.getters.getProjectById(id)
    }
  },

  computed: {
    ...mapState(['loggedUser']),
    project() {
      return this.getProject(this.id)
    }
  }
}
</script>
