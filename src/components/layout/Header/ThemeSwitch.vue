<script lang="ts">
import { mapActions, mapState } from 'vuex';

import { Theme } from '@/types/Theme';


export default {
    computed: {
        ...mapState("config", ['theme']),
        isChecked() {
            return this.theme === Theme.Dark
        }
    },

    methods: {
        ...mapActions("config", ['toggleTheme'])
    }
}
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