<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" lg="8">
        <editor :borderColor="editorBorderColor" :text="script" />
        <div class="mt-5 mx-1">
          <v-btn block dark color="rgba(80, 129, 251, 0.08)">Visualizar com o highlight</v-btn>
        </div>
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

  data: () => ({
    form: {
      color: '#6BD1FF'
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
