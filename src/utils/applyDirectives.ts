import type { App, Directive } from 'vue'

export function applyDirectives(app: App, directives: Record<string, Directive>) {
  for (const [name, directive] of Object.entries(directives)) {
    app.directive(name, directive)
  }
}
