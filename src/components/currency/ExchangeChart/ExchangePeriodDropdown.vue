<script lang="ts">
import { getEnumOptions } from '@/utils/getEnumOptions';
import type { VBtn } from 'vuetify/components';

enum IntervalOption {
    CurrentWeek = "currentWeek",
    PreviousWeek = "previousWeek",
}

export default {
    data() {
        return {
            options: getEnumOptions<IntervalOption>(IntervalOption, (label) => this.$t(label))
        }
    },

    methods: {
        handleOptionSelect(option: IntervalOption) {
            console.log("Select option " + option);
            (this.$refs.button as VBtn).$el.focus();
        }
    }
}
</script>

<template>
    <VBtn ref="button">
        {{ $t("interval") }}
        <VMenu activator="parent">
            <v-list @click:select="(arg) => handleOptionSelect(arg.id as IntervalOption)">
                <v-list-item v-for="option in options" :key="option.label" :value="option.label">
                    <v-list-item-title>{{ option.label }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </VMenu>
    </VBtn>
</template>

<style lang="scss" scoped></style>