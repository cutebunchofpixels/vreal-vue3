import type { Directive } from 'vue'

import { FOCUSABLE_ELEMENTS_SELECTOR } from '@/utils/constants'

export const focusFirst: Directive<HTMLElement, void> = {
  mounted(el) {
    const firstFocusable = el.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)
    firstFocusable?.focus()
  }
}
