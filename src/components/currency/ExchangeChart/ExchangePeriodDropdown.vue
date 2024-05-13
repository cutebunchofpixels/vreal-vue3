<script setup lang="ts">
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { VBtn } from 'vuetify/components';

import { getEnumOptions } from '@/utils/getEnumOptions';
import { dayjs } from '@/utils/dayjs';
import { MAX_EXCHANGE_INTERVAL } from '@/store/currency/constants';
import type { StoreState } from '@/store';
import type { FetchExchangeRatesPayload } from '@/store/currency/actions';

enum IntervalOption {
    CurrentWeek = "currentWeek",
    PreviousWeek = "previousWeek",
}

const { t } = useI18n()
const store = useStore<StoreState>()

const button = ref<VBtn | null>(null)

function getIntervalDates(option: IntervalOption) {
    let startDate = dayjs().subtract(MAX_EXCHANGE_INTERVAL - 1, 'day')
    let endDate = dayjs()

    if (option === IntervalOption.PreviousWeek) {
        startDate = dayjs().subtract(1, 'week')
        endDate = startDate.add(MAX_EXCHANGE_INTERVAL - 1, 'day')
    }

    return { startDate, endDate }
}

const options = getEnumOptions<IntervalOption>(IntervalOption, (label) => t(label))
const fetchExchangeRates = (payload: FetchExchangeRatesPayload) => store.dispatch('currency/fetchExchangeRates', payload)

async function handleOptionSelect(option: IntervalOption) {
    const dates = getIntervalDates(option);
    await fetchExchangeRates(dates);
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