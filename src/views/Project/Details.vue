<template>
  <v-row>
      <v-col cols="12" lg="8">
        <editor
          editable
          :project="project"
          :size="$vuetify.breakpoint.smAndUp ? '302' : '428'"
        />
      </v-col>
      <v-col>
        <form-project :project="project" @action="updateProject(project)" />
      </v-col>
    </v-row>
</template>

<script>
import Editor from '@/components/Editor.vue'
import FormProject from '@/components/FormProject.vue'
export default {
  name: 'ProjectDetails',

  components: {
    Editor,
    FormProject
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>