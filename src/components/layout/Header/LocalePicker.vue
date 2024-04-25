<script lang="ts">
import { mapActions, mapState } from 'vuex';

import { Locale } from '@/types/Locale';
import { getEnumOptions } from '@/utils/getEnumOptions';


const localeDisplayNames = {
    [Locale.English]: "English",
    [Locale.Hebrew]: "Hebrew",
}

export default {
    computed: {
        options() {
            return getEnumOptions<Locale>(Locale, (label) => localeDisplayNames[label])
        },

        ...mapState("config", ['locale'])
    },

    methods: {
        ...mapActions('config', ['changeLocale'])
    }
}
</script>

<template>
    <VSelect variant="solo" hide-details label="Language" :items="options" item-title="label" item-value="value"
        @update:model-value="(locale) => changeLocale({ locale, i18nInstance: $i18n })" :model-value="locale" />
</template>

<style lang="scss" scoped></style>