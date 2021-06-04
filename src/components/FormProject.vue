<template>
  <v-form class="px-2 mt-4" @submit.prevent="action(form)">
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
          v-model="form.title"
          label="Nome do seu projeto"
          dark
          :value="project.title"
        ></base-text-field>
      </v-col>
      <v-col>
        <base-text-area
          v-model="form.description"
          label="Descrição do seu projeto"
          dark
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
          v-model="form.language"
          dark
          :items="languages"
          label="Linguagem"
        ></base-select>
      </v-col>
      <v-col>
        <base-color-picker
          v-model="form.borderColor"
          :color="form.borderColor || '#FFFFFF'"
          @input="updateColor"
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
  name: 'FormProject',

  mixins: [ProjectMixin],

  computed: {
    ...mapState(['languages']),
    form() {
      return this.project
    }
  },

  methods: {
    updateColor(data) {
      this.$emit('updateColor', data)
    },
    action(data) {
      const idLanguage = data.language.id
      data.id = Date.now()
      data.idUser = 1
      data.idLanguage = idLanguage
      data.comments = 4
      data.heart = 6
      //this.$emit('action', data)
      console.log(data)
      //this.$store.dispatch('addProject', data)
      // this.$router.push({ name: 'Editor', params: { id: data.id } })
    }
  }
}
</script>

<style></style>
