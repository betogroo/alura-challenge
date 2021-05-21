<template>
  <v-container>
    <v-row v-for="(row, i) in slicedProjects" :key="i">
      <v-col
        v-for="(project, i) in row"
        :key="`c${i}`"
        cols="12"
        :lg="row.length === 2 ? '6' : '12'"
      >
        <editor :borderColor="project.borderColor" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from '@/components/Editor.vue'
export default {
  name: 'ViewCommunity',

  components: {
    Editor
  },

  data: () => ({
    projects: [
      { borderColor: '#7A8B23' },
      { borderColor: '#61238B' },
      { borderColor: '#8B2A23' },
      { borderColor: '#238B59' },
      { borderColor: '#FFFFFF' },
      { borderColor: '#BABACA' }
    ]
  }),

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
    }
  }
}
</script>

<style></style>
