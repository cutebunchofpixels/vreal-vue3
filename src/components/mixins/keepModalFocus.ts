import { nextTick, type ComponentOptions } from 'vue'

export const keepModalFocus: ComponentOptions = {
  computed: {
    focusableElementsSelector() {
      return 'button, a, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    }
  },

  methods: {
    handleKeyPress(e: KeyboardEvent) {
      if (e.shiftKey || e.key !== 'Tab') {
        return
      }

      const modalChild = this.$refs.child.$el as HTMLElement
      const focusableChildren = modalChild.querySelectorAll<HTMLElement>(
        this.focusableElementsSelector
      )
      const firstFocusable = this.getFirstFocusableChild(focusableChildren)
      const lastFocusable = this.getLastFocusableChild(focusableChildren)

      if (!lastFocusable || !firstFocusable) {
        return
      }

      if (document.activeElement === lastFocusable) {
        e.preventDefault()
        firstFocusable.focus()
      }
    },

    getLastFocusableChild(children: HTMLElement[]) {
      for (let i = children.length - 1; i > 0; i--) {
        //@ts-ignore
        if (!children[i].disabled) {
          return children[i]
        }
      }
    },

    getFirstFocusableChild(children: HTMLElement[]) {
      for (let i = 0; i < children.length; i++) {
        //@ts-ignore
        if (!children[i].disabled) {
          return children[i]
        }
      }
    }
  },

  watch: {
    async modelValue(next) {
      await nextTick()
      const modalChild = this.$refs.child.$el as HTMLElement
      if (!modalChild) {
        throw new Error(
          'Modal child ref is undefined. Most likely, you forgot to pass child ref to the first child of the VDialog component'
        )
      }
      if (next) {
        modalChild.addEventListener('keydown', this.handleKeyPress)
      } else {
        modalChild.removeEventListener('keydown', this.handleKeyPress)
      }
    }
  }
}
