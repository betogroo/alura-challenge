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
          :value="project.title"
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
          v-model="form.language"
        ></base-select>
      </v-col>
      <v-col>
        <base-color-picker
          @input="updateColor"
          :color="form.borderColor || '#FFFFFF'"
          v-model="form.borderColor"
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

  methods: {
    testForm() {
      console.log(this.form)
    },
    updateColor(data) {
      this.$emit('updateColor', data)
    }
  },

  computed: {
    ...mapState(['languages']),
    form() {
      return this.project
    }
  }
}
</script>

<style></style>
