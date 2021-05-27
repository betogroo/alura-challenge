<template>
  <div>
    <v-card
      :color="color"
      outlined
      dark
      class="ma-1 mb-0"
      :style="`border: 24px solid ${borderColor}`"
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
        <v-textarea :background-color="color" solo :value="text" :height="size">
        </v-textarea>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
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
    }
  },

  data: () => ({
    macBalls: ['#FF5F56', '#FFBD2E', '#27C93F']
  })
}
</script>
