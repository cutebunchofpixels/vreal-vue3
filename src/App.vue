<script lang="ts">
import { RouterView } from 'vue-router'
import { mapMutations, mapState } from 'vuex'

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
}
</script>

<template>
  <VApp :theme="theme">
    <RouterView />
  </VApp>
</template>
