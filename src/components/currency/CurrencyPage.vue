<script lang="ts">
import { mapActions, mapGetters } from 'vuex';

import IntervalSelectors from './IntervalSelectors/IntervalSelectors.vue';
import type { PaymentCardInfo } from './PaymentCards/PaymentCard.vue';
import PaymentCardsList from './PaymentCards/PaymentCardsList.vue';
import ExchangeChartBlock from './ExchangeChart/ExchangeChartBlock.vue';
import { INITIAL_END_DATE, INITIAL_START_DATE } from '@/store/currency/constants';

export default {
    components: {
        IntervalSelectors,
        PaymentCardsList,
        ExchangeChartBlock
    },

    data() {
        return {
            cards: [
                {
                    value: 75000,
                    type: 'currency',
                    caption: this.$t("totalRevenue"),
                },
                { value: 16, type: 'currency', caption: this.$t("averagePayment") },
                {
                    value: 15,
                    type: 'percentage',
                    caption: this.$t("repeatPurchaseRate"),
                },
            ] as PaymentCardInfo[]
        }
    },

    methods: {
        ...mapActions("currency", ["fetchExchangeRates"])
    },

    computed: {
        ...mapGetters("currency", ["isEmpty"])
    },

    mounted() {
        if (this.isEmpty) {
            this.fetchExchangeRates({ startDate: INITIAL_START_DATE, endDate: INITIAL_END_DATE })
        }
    }
}
</script>

<template>
    <div class="pa-4 container">
        <h1>{{ $t("currencyExchange") }}</h1>
        <IntervalSelectors />
        <PaymentCardsList :cards="cards" />
        <ExchangeChartBlock />
    </div>
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