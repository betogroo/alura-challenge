export const BaseBtnMixin = {
  props: {
    text: {
      type: String,
      default: 'Submit'
    },
    block: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
