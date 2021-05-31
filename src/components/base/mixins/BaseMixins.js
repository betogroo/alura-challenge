export const BaseFormMixins = {
  props: {
    value: {
      type: [String, Number, Object],
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateValue(data) {
      this.$emit('input', data)
    }
  }
}
export const BaseTextMixins = {
  props: {
    label: {
      type: [String, Number],
      default: ''
    }
  }
}
export const BaseBtnMixins = {
  props: {
    block: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'submit'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}

export const BaseBtnMixin = {}
