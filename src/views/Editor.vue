<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" lg="8">
        <editor />
      </v-col>
      <v-col>
        <form-project />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from '@/components/Editor.vue'
import FormProject from '@/components/FormProject.vue'
export default {
  name: 'ViewEditor',

  components: {
    Editor,
    FormProject
  },

  data: () => ({
    form: {
      color: '#6BD1FF'
    }
  })
}
</script>
