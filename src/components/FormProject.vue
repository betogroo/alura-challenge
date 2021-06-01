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
          label="Nome do seu projeto"
          dark
          v-model="form.title"
          :value="project.title"
        ></base-text-field>
      </v-col>
      <v-col>
        <base-text-area
          label="Descrição do seu projeto"
          dark
          v-model="form.description"
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
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ `O projeto ${this.form.title} foi salvo salvo!` }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>

<script>
import { ProjectMixin } from '@/components/mixins/ComponentMixins.js'
import { mapState } from 'vuex'
export default {
  mixins: [ProjectMixin],

  name: 'FormProject',

  data: () => ({
    snackbar: false,
    timeout: 2000
  }),

  methods: {
    testForm() {
      this.snackbar = true
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
