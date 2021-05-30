<template>
  <v-form class="px-2 mt-4">
    <v-row>
      <v-col cols="12">
        <div class="text-subtitle-1 white--text font-weight-light">
          SEU PROJETO
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <base-text-field :value="project.title"></base-text-field>
      </v-col>
      <v-col>
        <base-text-area :value="project.description"></base-text-area>
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
          :item="projectLanguage"
        ></base-select>
      </v-col>
      <v-col>
        <base-color-picker></base-color-picker>
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

  methods: {
    getLanguage(id) {
      return this.$store.getters.getLanguageByProjectId(id)
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
