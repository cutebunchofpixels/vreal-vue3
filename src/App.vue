<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia';

import { useConfigStore } from './store/config';

const configStore = useConfigStore()
const { theme } = storeToRefs(configStore)
</script>

<template>
  <VApp :theme="theme">
    <RouterView />
  </VApp>
</template>
