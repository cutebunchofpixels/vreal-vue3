<script setup lang="ts">
import { useStore } from 'vuex';

import IntervalSelectors from './IntervalSelectors/IntervalSelectors.vue';
import type { PaymentCardInfo } from './PaymentCards/PaymentCard.vue';
import PaymentCardsList from './PaymentCards/PaymentCardsList.vue';
import ExchangeChartBlock from './ExchangeChart/ExchangeChartBlock.vue';
import { INITIAL_END_DATE, INITIAL_START_DATE } from '@/store/currency/constants';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { StoreState } from '@/store';
import type { FetchExchangeRatesPayload } from '@/store/currency/actions';
import ProtectedRoute from '../hoc/ProtectedRoute.vue';

const { t } = useI18n()
const store = useStore<StoreState>()

const cards = ref<PaymentCardInfo[]>([{
    value: 75000,
    type: 'currency',
    caption: t("totalRevenue"),
},
{ value: 16, type: 'currency', caption: t("averagePayment") },
{
    value: 15,
    type: 'percentage',
    caption: t("repeatPurchaseRate"),
}])

const fetchExchangeRates = (payload: FetchExchangeRatesPayload) => store.dispatch('currency/fetchExchangeRates', payload)
const isEmpty = computed<Boolean>(() => store.getters['currency/isEmpty'])

onMounted(() => {
    if (!isEmpty.value) {
        return
    }

    fetchExchangeRates({ startDate: INITIAL_START_DATE, endDate: INITIAL_END_DATE })
})
</script>

<template>
    <ProtectedRoute>
        <div class="pa-4 container" v-focus-first>
            <h1>{{ $t("currencyExchange") }}</h1>
            <IntervalSelectors />
            <PaymentCardsList :cards="cards" />
            <ExchangeChartBlock />
        </div>
    </ProtectedRoute>
</template>

<style scoped lang="scss">
.container {
    max-width: 1000px;
    width: 100%;
    gap: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>