<script setup lang="ts">
import { useStore } from 'vuex';

import { Theme } from '@/types/Theme';
import type { StoreState } from '@/store';
import { computed } from 'vue';

const store = useStore<StoreState>()

const theme = computed(() => store.state.config.theme)
const isChecked = computed(() => theme.value === Theme.Dark)
const toggleTheme = () => store.dispatch('config/toggleTheme')
</script>

<template>
    <VSwitch inset class="theme-switch" :model-value="isChecked" @update:model-value="toggleTheme"
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