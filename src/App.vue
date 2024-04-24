<script lang="ts">
import { RouterView } from 'vue-router'
import { mapState } from 'vuex'

export default {
  components: {
    RouterView
  },

  computed: {
    ...mapState('config', ['theme'])
  }
}
</script>

<template>
  <VApp :theme="theme">
    <RouterView />
  </VApp>
</template>
