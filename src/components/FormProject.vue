<template>
  <v-form @submit.prevent="testForm" class="px-2 mt-4">
    <v-row>
      <v-col cols="12">
        <div class="text-subtitle-1 white--text font-weight-light">
          SEU PROJETO
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <base-text-field
          dark
          v-model="form.title"
          label="Nome do seu projeto"
        ></base-text-field>
      </v-col>
      <v-col>
        <base-text-area
          dark
          v-model="form.description"
          label="Descrição do seu projeto"
        ></base-text-area>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-subtitle-1 white--text font-weight-light">
          PERSONALIZAÇÃO
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" lg="12">
        <base-select
          dark
          :items="languages"
          :value="projectLanguage"
          v-model="form.language"
        ></base-select>
      </v-col>
      <v-col>
        <base-color-picker
          :color="project.borderColor"
          v-model="form.color"
        ></base-color-picker>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <base-btn-filled block>Salvar Projeto</base-btn-filled>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ProjectMixin } from '@/components/mixins/ComponentMixins.js'
import { mapState } from 'vuex'
export default {
  mixins: [ProjectMixin],

  name: 'Formproject',

  data: () => ({
    form: {}
  }),

  methods: {
    getLanguage(id) {
      return this.$store.getters.getLanguageByProjectId(id)
    },
    testForm() {
      console.log(this.form)
    }
  },

  computed: {
    ...mapState(['languages']),
    projectLanguage() {
      return this.getLanguage(this.project.idLanguage)
    }
  }
}
</script>

<style></style>
