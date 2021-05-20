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
        <v-text-field
          label="Nome do seu projeto"
          solo-inverted
          dark
          hide-details
        ></v-text-field>
      </v-col>
      <v-col>
        <v-textarea
          dark
          solo-inverted
          auto-grow
          value="texto do seu projeto"
        ></v-textarea>
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
        <v-select
          v-model="language"
          :items="languages"
          item-text="name"
          item-value="id"
          hide-details=""
          solo-inverted
          dark
        ></v-select>
      </v-col>
      <v-col>
        <v-sheet class="pa-1" rounded height="48">
          <v-menu
            top
            nudge-bottom="105"
            nudge-left="16"
            :close-on-content-click="true"
          >
            <template v-slot:activator="{ on }">
              <v-sheet
                v-on="on"
                rounded=""
                class="ma-auto"
                height="40"
                :color="form.color"
              >
              </v-sheet>
            </template>
            <v-color-picker
              v-model="form.color"
              flat
              @input="changeEditorBorderColor(form.color)"
            />
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn block color="#5081FB">Salvar Projeto</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'Formproject',

  data: () => ({
    form: {
      color: '#6BD1FF'
    },
    languages: [
      { name: 'Javascript', id: 1 },
      { name: 'Typescript', id: 2 },
      { name: 'PHP', id: 3 },
      { name: 'Python', id: 4 }
    ],
    language: {
      name: 'Javascript',
      id: 1
    }
  }),

  methods: {
    changeEditorBorderColor(color) {
      this.$store.dispatch('changeEditorBorderColor', color)
    }
  }
}
</script>

<style></style>
