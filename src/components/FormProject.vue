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
        <base-text-field></base-text-field>
      </v-col>
      <v-col>
        <base-text-area></base-text-area>
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
        <base-select dark></base-select>
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
export default {
  name: 'Formproject'

}
</script>

<style></style>
