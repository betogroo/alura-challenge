<template>
  <v-hover v-slot="{ hover }">
    <v-select
      v-model="language"
      :items="languages"
      item-text="name"
      item-value="id"
      hide-details
      solo
      :background-color="
        !hover ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.24)'
      "
      :dark="dark"
      :dense="dense"
    ></v-select>
  </v-hover>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    dark: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    languages: [
      { name: 'Javascript', id: 1 },
      { name: 'Typescript', id: 2 },
      { name: 'PHP', id: 3 },
      { name: 'Python', id: 4 }
    ],
    language: {
      name: 'Javascript',
      id: 1
    }
  })
}
</script>

<style></style>
