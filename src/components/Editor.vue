<template>
  <div>
    <div ref="printMe">
      <v-card
        outlined
        dark
        flat
        :to="!editable ? { name: 'Project', params: { id: project.id } } : ''"
        class="ma-1 mb-0"
        :style="`border: 24px solid ${project.borderColor || '#FFFFFF'}`"
        :height="size"
      >
        <v-card-title class="d-flex justify-space-between pa-0 pt-2 px-4">
          <div>
            <v-icon
              v-for="macBall in macBalls"
              :key="macBall"
              x-small
              left
              :color="macBall"
            >
              mdi-circle
            </v-icon>
          </div>
          <div>
            <v-icon v-if="project.language" large
              >mdi-language-{{ project.language.icon }}</v-icon
            >
          </div>
        </v-card-title>
        <v-card-text class="pa-0 pl-1">
          <div v-if="!isHighlight">
            <v-textarea
              v-model="form.script"
              hide-details
              flat
              solo
              no-resize
              background-color="#1d262f"
              @input="updateValue"
            >
            </v-textarea>
          </div>
          <div v-else>
            <div v-highlight>
              <pre
                :class="`language-${
                  project.language ? project.language.code : ''
                }`"
              >
                  <code> 
                    {{ `\n${form.script}` }}
                  </code>
                </pre>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div v-if="editable" class="mt-5 mx-1">
      <v-row>
        <v-col :cols="isHighlight ? 8 : 12">
          <base-btn-outlined dark block type="button" @click="toggleHighlight">
            {{ !isHighlight ? 'Visualizar com o Highlight' : 'Editar Código' }}
          </base-btn-outlined>
        </v-col>
        <v-col v-if="isHighlight">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <base-btn-icon
                icon="share"
                v-bind="attrs"
                v-on="on"
                @action="print"
              />
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <base-btn-icon icon="close" @action="dialog = false" />
                <v-toolbar-title>Compartilhar Código</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-title> {{ project.title || 'Sem nome' }}</v-card-title>
              <v-card-text class="pt-2">
                <img width="100%" :src="output" />
              </v-card-text>
              <v-card-actions>
                <a :href="output" :download="`${Date.now()}.png`">Baixar</a>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn
            tag="a"
            :href="output"
            :download="`${Date.now()}.png`"
            @click="print"
            ><v-icon>mdi-download</v-icon></v-btn
          >
        </v-col>
      </v-row>
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
    isHighlight: !false,
    output: null,
    dialog: false
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
    },
    async print() {
      const el = this.$refs.printMe
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options)
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
