<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" lg="8">
        <editor editable :size="$vuetify.breakpoint.smAndUp ? '302' : '428'" />
      </v-col>
      <v-col>
        <form-project />
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
