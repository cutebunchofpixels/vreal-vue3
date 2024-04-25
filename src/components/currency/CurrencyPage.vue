<script lang="ts">
import IntervalSelectors from './IntervalSelectors/IntervalSelectors.vue';
import type { PaymentCardInfo } from './PaymentCards/PaymentCard.vue';
import PaymentCardsList from './PaymentCards/PaymentCardsList.vue';
import ExchangeChartBlock from './ExchangeChart/ExchangeChartBlock.vue';

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