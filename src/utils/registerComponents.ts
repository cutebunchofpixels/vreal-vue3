import type { App, Component } from 'vue'

import { components as uiComponents } from '@/components/ui'

export function registerComponents(app: App, components: Record<string, Component> = uiComponents) {
  for (const [name, component] of Object.entries(components)) {
    app.component(name, component)
  }
}
