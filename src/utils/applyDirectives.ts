import type { App, Directive } from 'vue'
import { directives as customDirectives } from '@/components/directives'

export function applyDirectives(
  app: App,
  directives: Record<string, Directive> = customDirectives
) {
  for (const [name, directive] of Object.entries(directives)) {
    app.directive(name, directive)
  }
}
