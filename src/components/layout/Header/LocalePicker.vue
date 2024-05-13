<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { Locale } from '@/types/Locale';
import { getEnumOptions } from '@/utils/getEnumOptions';
import type { StoreState } from '@/store';

const store = useStore<StoreState>()
const { locale: localeRef } = useI18n()

const localeDisplayNames = {
    [Locale.English]: "English",
    [Locale.Hebrew]: "Hebrew",
}
const options = getEnumOptions<Locale>(Locale, (label) => localeDisplayNames[label])
const locale = computed(() => store.state.config.locale)

function changeLocale(locale: Locale) {
    store.dispatch('config/changeLocale', { locale, localeRef })
}
</script>

<template>
    <VSelect variant="solo" hide-details label="Language" :items="options" item-title="label" item-value="value"
        @update:model-value="changeLocale" :model-value="locale" aria-label="Select language" />
</template>