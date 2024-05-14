import { useToast } from 'vue-toastification'

declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: ReturnType<typeof useToast>
  }
}
