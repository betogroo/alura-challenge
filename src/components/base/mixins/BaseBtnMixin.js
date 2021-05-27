export const BaseBtnMixin = {
  props: {
    value: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
}
