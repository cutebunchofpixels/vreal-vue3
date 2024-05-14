<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';

import { Locale } from '@/types/Locale';
import { getEnumOptions } from '@/utils/getEnumOptions';
import { useConfigStore } from '@/store/config';

const configStore = useConfigStore()
const { locale: localeRef } = useI18n()

const localeDisplayNames = {
    [Locale.English]: "English",
    [Locale.Hebrew]: "Hebrew",
}

const { locale } = storeToRefs(configStore)
const options = getEnumOptions<Locale>(Locale, (label) => localeDisplayNames[label])

function changeLocale(locale: Locale) {
    configStore.changeLocale(locale, localeRef)
}
</script>

<template>
    <VSelect variant="solo" hide-details label="Language" :items="options" item-title="label" item-value="value"
        @update:model-value="changeLocale" :model-value="locale" aria-label="Select language" />
</template>