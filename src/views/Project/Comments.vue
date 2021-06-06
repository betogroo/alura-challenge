<template>
  <h1>Comentários do projeto {{ project.title }}</h1>
</template>

<script>
export default {
  name: 'ProjectComments',

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
