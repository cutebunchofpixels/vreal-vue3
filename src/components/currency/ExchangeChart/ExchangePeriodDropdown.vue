<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { VBtn } from 'vuetify/components';

import { getEnumOptions } from '@/utils/getEnumOptions';
import { dayjs } from '@/utils/dayjs';
import { MAX_EXCHANGE_INTERVAL } from '@/store/currency/constants';
import { useCurrencyStore } from '@/store/currency';

enum IntervalOption {
    CurrentWeek = "currentWeek",
    PreviousWeek = "previousWeek",
}

const { t } = useI18n()
const currencyStore = useCurrencyStore()

const button = ref<VBtn | null>(null)

const options = getEnumOptions<IntervalOption>(IntervalOption, (label) => t(label))

function getIntervalDates(option: IntervalOption) {
    let startDate = dayjs().subtract(MAX_EXCHANGE_INTERVAL - 1, 'day')
    let endDate = dayjs()

    if (option === IntervalOption.PreviousWeek) {
        startDate = dayjs().subtract(1, 'week')
        endDate = startDate.add(MAX_EXCHANGE_INTERVAL - 1, 'day')
    }

    return { startDate, endDate }
}

async function handleOptionSelect(option: IntervalOption) {
    const { startDate, endDate } = getIntervalDates(option);
    await currencyStore.fetchExchangeRates(startDate, endDate);
    button.value?.$el.focus()
}
</script>

<template>
    <VBtn ref="button" aria-label="Select exchange interval">
        {{ $t("interval") }}
        <VMenu activator="parent">
            <VList>
                <VListItem v-for="option in options" :key="option.label" :value="option.label"
                    @click="handleOptionSelect(option.value)">
                    <VListItemTitle>{{ option.label }}</VListItemTitle>
                </VListItem>
            </VList>
        </VMenu>
    </VBtn>
</template>