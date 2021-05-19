<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8">
        <editor />
      </v-col>
      <v-col> aqui </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from '@/components/Editor.vue'
export default {
  name: 'Home',

  components: {
    Editor
  }
}
</script>
