<template>
  <div>
    <v-card
      outlined
      dark
      flat
      :to="!editable ? { name: 'Editor', params: { id: project.id } } : ''"
      class="ma-1 mb-0"
      :style="`border: 24px solid ${project.borderColor || '#FFFFFF'}`"
    >
      <v-card-title class="pa-0 pt-2 pl-4">
        <v-icon
          v-for="macBall in macBalls"
          :key="macBall"
          x-small
          left
          :color="macBall"
        >
          mdi-circle
        </v-icon>
      </v-card-title>
      <v-card-text class="pa-0 pl-1">
        <template v-if="!isHighlight">
          <v-textarea
            v-model="form.script"
            hide-details
            solo
            no-resize
            :height="size"
            background-color="#1d262f"
            @input="updateValue"
          >
          </v-textarea>
        </template>
        <template v-else>
          <div v-highlight :style="`height: ${size - 1}px`">
            <pre :class="`language-javascript`">
                <code> 
                  {{ `\n${form.script}` }}
                </code>
              </pre>
          </div>
        </template>
      </v-card-text>
    </v-card>
    <div v-if="editable" class="mt-5 mx-1">
      <base-btn-outlined dark block type="button" @click="toggleHighlight">
        {{ !isHighlight ? 'Visualizar com o Highlight' : 'Editar Código' }}
      </base-btn-outlined>
    </div>
  </div>
</template>

<script>
import { ProjectMixin } from '@/components/mixins/ComponentMixins.js'
import 'vue-code-highlight/themes/prism-dark.css'
export default {
  name: 'Editor',

  mixins: [ProjectMixin],

  props: {
    size: {
      type: [String, Number],
      default: '302'
    },
    editable: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    macBalls: ['#FF5F56', '#FFBD2E', '#27C93F'],
    isHighlight: !false
  }),

  computed: {
    form() {
      return this.project
    }
  },

  methods: {
    toggleHighlight() {
      this.isHighlight = !this.isHighlight
    },
    updateValue(data) {
      this.$emit('input', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-card {
  background-color: #1d262f;
  color: #ffffff;
}
pre[class*='language-'] {
  width: 99%;
  padding: 0;
  margin: 0;
  margin-top: -40px;
  padding-left: 10px;
  overflow: auto;
  border: inherit;
  box-shadow: none;
}
pre[class*='language-'],
:not(pre) > code[class*='language-'] {
  background: inherit;
}
</style>
