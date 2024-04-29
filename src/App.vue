<script lang="ts">
import { RouterView } from 'vue-router'
import { mapMutations, mapState } from 'vuex'

import { auth } from './firebase';

export default {
  components: {
    RouterView
  },

  computed: {
    ...mapState('config', ['theme'])
  },

  methods: {
    ...mapMutations("auth", {
      setAuthReady: "setReady"
    })
  },

  mounted() {
    auth.authStateReady().then(() => this.setAuthReady(true))
  }
}
</script>

<template>
  <VApp :theme="theme">
    <RouterView />
  </VApp>
</template>
