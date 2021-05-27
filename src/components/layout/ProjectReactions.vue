<template>
  <v-btn
    :ripple="false"
    text
    dark
    max-width="58"
    width="58"
    height="40"
    @click.stop="reactionType === 'heart' ? toggleHeart() : ''"
  >
    <v-icon lang="ma-3" left :color="heart ? 'red' : ''">
      mdi-{{ reactionType === 'comments' ? 'chat' : 'heart' }}
    </v-icon>
    {{ itemCount }}
  </v-btn>
</template>

<script>
export default {
  name: 'ProjecReactions',

  props: {
    itemCount: {
      type: Number,
      default: 0
    },
    reactionType: {
      type: String,
      default: 'comments'
    }
  },

  data: () => ({
    heart: false
  }),

  methods: {
    toggleHeart() {
      this.heart = !this.heart
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 16px;
}
.v-btn::before {
  background-color: transparent;
}
.v-btn:active {
  background-color: rgba(255, 255, 255, 0.16);
}
</style>
