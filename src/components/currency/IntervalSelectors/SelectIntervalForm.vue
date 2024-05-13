<script setup lang="ts">
import { Dayjs } from 'dayjs';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

import DatePicker from '@/components/ui/DatePicker/DatePicker.vue'
import { INITIAL_END_DATE, INITIAL_START_DATE, MAX_EXCHANGE_INTERVAL, MIN_EXCHANGE_INTERVAL } from '@/store/currency/constants';
import { dayjs } from '@/utils/dayjs';
import type { StoreState } from '@/store';
import type { FetchExchangeRatesPayload } from '@/store/currency/actions';

const store = useStore<StoreState>()

const loadedStartDate = computed(() => store.getters.loadedStartDate)
const loadedEndDate = computed(() => store.getters.loadedEndDate)
const startDate = ref<Dayjs | null>(loadedStartDate.value || INITIAL_START_DATE)
const endDate = ref<Dayjs | null>(loadedEndDate.value || INITIAL_END_DATE)
const fetchExchangeRates = (payload: FetchExchangeRatesPayload) => store.dispatch('currency/fetchExchangeRates', payload)


function isValidStartDate(startDate: Dayjs, endDate: Dayjs | null) {
    if (startDate.isAfter(dayjs())) {
        return false
    }

    if (!endDate) {
        return true
    }

    const minValidDays = MIN_EXCHANGE_INTERVAL - 1
    const maxValidDays = MAX_EXCHANGE_INTERVAL - 1
    const diff = endDate.diff(startDate, 'day')

    return diff >= minValidDays && diff <= maxValidDays
}

function isValidEndDate(startDate: Dayjs | null, endDate: Dayjs) {
    if (endDate.isAfter(dayjs())) {
        return false
    }

    if (!startDate) {
        return true
    }

    const minValidDays = MIN_EXCHANGE_INTERVAL - 1
    const maxValidDays = MAX_EXCHANGE_INTERVAL - 1
    const diff = endDate.diff(startDate, 'day')

    return diff >= minValidDays && diff <= maxValidDays
}

async function handleFormSubmit() {
    if (!startDate.value || !endDate.value) {
        return
    }

    await fetchExchangeRates({ startDate: startDate.value, endDate: endDate.value })
}
</script>

<template>
    <VForm class="form-container" @submit.prevent="handleFormSubmit">
        <VRow justify="space-between">
            <VCol cols="12" sm="6" md="auto" class="flex-grow-1">
                <DatePicker v-model="startDate" :label="$t('startDate')"
                    :allowed-dates="(startDate) => isValidStartDate(startDate, endDate)" @clear="startDate = null"
                    aria-label="Select start date" />
            </VCol>
            <VCol cols="12" sm="6" md="auto" class="flex-grow-1">
                <DatePicker v-model="endDate" :label="$t('endDate')"
                    :allowed-dates="(endDate) => isValidEndDate(startDate, endDate)" @clear="endDate = null"
                    aria-label="Select end date" />
            </VCol>
            <VCol cols="12" md="auto" class="d-flex justify-end">
                <VBtn :disabled="!(startDate && endDate)" type="submit">
                    {{ $t("viewReport") }}
                </VBtn>
            </VCol>
        </VRow>
    </VForm>
</template>


<style scoped lang="scss">
.form-container {
    padding: 10px;
}
</style>
