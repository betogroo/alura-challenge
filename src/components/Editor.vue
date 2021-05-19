<template>
  <div>
    <v-card
      :color="editor.color"
      outlined
      dark
      class="ma-1"
      :style="`border: 24px solid ${editorBorderColor}`"
    >
      <v-card-title class="pa-0 pt-2 pl-4">
        <v-icon
          v-for="macBall in editor.macBalls"
          :key="macBall"
          x-small
          left
          :color="macBall"
        >
          mdi-circle
        </v-icon>
      </v-card-title>
      <v-card-text class="pa-0 pl-1">
        <v-textarea
          :background-color="editor.color"
          auto-grow
          solo
          :value="script"
        >
        </v-textarea>
      </v-card-text>
    </v-card>
    <div class="mt-5 mx-1">
      <v-btn block dark color="#133055">Visualizar com o highlight</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Editor',

  data: () => ({
    editor: {
      color: '#000000',
      macBalls: ['#FF5F56', '#FFBD2E', '#27C93F']
    },
    script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`
  }),

  computed: {
    ...mapState(['editorBorderColor'])
  }
}
</script>

<style></style>
