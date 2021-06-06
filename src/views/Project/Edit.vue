<template>
  <h1>Editar projeto {{ project.title }}</h1>
</template>

<script>
export default {
  name: 'ProjectEdit',

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