import type { Directive } from 'vue'

import { FOCUSABLE_ELEMENTS_SELECTOR } from '@/utils/constants'

function handleKeyPress(e: KeyboardEvent, el: HTMLElement) {
  if (e.key !== 'Tab') {
    return
  }

  const focusableChildren = Array.from(
    el.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)
  )

  const firstFocusable = focusableChildren.at(0)
  const lastFocusable = focusableChildren.at(-1)

  if (!lastFocusable || !firstFocusable) {
    return
  }

  if (document.activeElement === lastFocusable && !e.shiftKey) {
    e.preventDefault()
    firstFocusable.focus()
    return
  }

  if (document.activeElement === firstFocusable && e.shiftKey) {
    e.preventDefault()
    lastFocusable.focus()
    return
  }
}

export const keepFocus: Directive<
  HTMLElement & { _handleKeyPress: (e: KeyboardEvent) => void },
  void
> = {
  mounted(el) {
    const handler = (e: KeyboardEvent) => handleKeyPress(e, el)
    el.addEventListener('keydown', handler)
    el._handleKeyPress = handler
  },

  unmounted(el) {
    el.removeEventListener('keydown', el._handleKeyPress)
  }
}
