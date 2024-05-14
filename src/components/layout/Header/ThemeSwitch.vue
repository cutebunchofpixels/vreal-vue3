<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { Theme } from '@/types/Theme';
import { useConfigStore } from '@/store/config';

const configStore = useConfigStore()

const { theme } = storeToRefs(configStore)
const isChecked = computed(() => theme.value === Theme.Dark)
</script>

<template>
    <VSwitch inset class="theme-switch" :model-value="isChecked" @update:model-value="configStore.toggleTheme"
        aria-label="Toggle theme">
        <template v-slot:label>
            <VIcon icon="mdi-theme-light-dark" />
        </template>
    </VSwitch>
</template>

<style lang="scss" scoped>
.theme-switch {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>