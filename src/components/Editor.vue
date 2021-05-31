<template>
  <div>
    <v-card
      outlined
      dark
      flat
      :to="!editable ? { name: 'Editor', params: { id: project.id } } : ''"
      class="ma-1 mb-0"
      :style="`border: 24px solid ${project.borderColor}`"
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
        <template v-if="!editable">
          <v-card :height="size">{{ project.script }}</v-card>
        </template>
        <template v-else>
          <template v-if="!isHighlight">
            <v-textarea
              hide-details=""
              solo
              :value="project.script"
              :height="size"
              no-resize
              rows="5"
            >
            </v-textarea>
          </template>
          <template v-else>
            <pre>
              <code>
                {{ project.script }}
              </code>
            </pre>
          </template>
        </template>
      </v-card-text>
    </v-card>
    <div class="mt-5 mx-1">
      <base-btn-outlined dark block type="button" @click="toggleHighlight">
        {{ !isHighlight ? 'Visualizar com o Highlight' : 'Visualizar sem o Highlight'}}
      </base-btn-outlined>
    </div>
  </div>
</template>

<script>
import { ProjectMixin } from '@/components/mixins/ComponentMixins.js'
export default {
  mixins: [ProjectMixin],

  name: 'Editor',

  props: {
    color: {
      type: String,
      default: '#000000'
    },
    text: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: '#6BD1FF'
    },
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
    isHighlight: !true
  }),

  methods: {
    toggleHighlight() {
      this.isHighlight = !this.isHighlight
    }
  },
}
</script>

<style lang="scss" scoped></style>
