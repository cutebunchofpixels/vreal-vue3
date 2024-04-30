import type { ComponentOptions } from 'vue'
import { mapState } from 'vuex'

import { auth } from '@/firebase'
import { store } from '@/store'
import router from '@/router'

export const protectedRoute: ComponentOptions = {
  computed: {
    ...mapState('auth', ['user', 'isReady'])
  },

  async beforeRouteEnter(_, from) {
    await auth.authStateReady()

    if (!store.state.auth.user) {
      return { name: 'signin', query: { from: from.path } }
    }
  },

  watch: {
    user(newValue) {
      if (!newValue) {
        router.replace('signin')
      }
    }
  }
}
