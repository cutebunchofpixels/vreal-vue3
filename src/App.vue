<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useStore } from 'vuex';
import type { StoreState } from './store';
import { computed } from 'vue';

const store = useStore<StoreState>()
const theme = computed(() => store.state.config.theme)

</script>

<template>
  <VApp :theme="theme">
    <RouterView />
  </VApp>
</template>
