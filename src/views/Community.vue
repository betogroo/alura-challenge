<template>
  <v-container>
    <v-row v-for="(row, i) in slicedProjects" :key="i">
      <v-col
        v-for="(project, i) in row"
        :key="`c${i}`"
        cols="12"
        :lg="row.length === 2 ? '6' : '12'"
      >
        <editor :borderColor="project.borderColor" :text="project.script" />
        <project-details :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@/components/Editor.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'
export default {
  name: 'ViewCommunity',

  components: {
    Editor,
    ProjectDetails
  },

  data: () => ({}),

  methods: {
    sliceProjects(rows) {
      let slicedProjects = []
      for (let i = 0; i < this.projects.length; i = i + rows) {
        slicedProjects.push(this.projects.slice(i, i + rows))
      }
      return slicedProjects
    }
  },

  computed: {
    slicedProjects() {
      return this.sliceProjects(2)
    },
    ...mapState(['projects'])
  }
}
</script>
