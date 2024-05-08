import { nextTick, type ComponentOptions } from 'vue'

import { FOCUSABLE_ELEMENTS_SELECTOR } from '@/utils/constants'

export const keepModalFocus: ComponentOptions = {
  methods: {
    handleKeyPress(e: KeyboardEvent) {
      if (e.shiftKey || e.key !== 'Tab') {
        return
      }

      const modalChild = this.$refs.child.$el as HTMLElement

      const focusableChildren = Array.from(
        modalChild.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)
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
      return children.at(-1)
    },

    getFirstFocusableChild(children: HTMLElement[]) {
      return children.at(0)
    }
  },

  watch: {
    async modelValue(next) {
      await nextTick()
      const modalChild = this.$refs.child.$el as HTMLElement

      if (next) {
        modalChild.addEventListener('keydown', this.handleKeyPress)
      } else {
        modalChild.removeEventListener('keydown', this.handleKeyPress)
      }
    }
  }
}
