import { useToast } from 'vue-toastification'
import type { Store } from 'vuex'

import type { StoreState } from '@/store'

declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: ReturnType<typeof useToast>
    $store: Store<StoreState>
  }
}
