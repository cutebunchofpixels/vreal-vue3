<script lang="ts">
import IntervalSelectors from './IntervalSelectors/IntervalSelectors.vue';
import type { PaymentCardInfo } from './PaymentCards/PaymentCard.vue';
import PaymentCardsList from './PaymentCards/PaymentCardsList.vue';
import ExchangeChartBlock from './ExchangeChart/ExchangeChartBlock.vue';
import { mapMutations } from 'vuex';

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
                    caption: 'Total revenue',
                },
                { value: 16, type: 'currency', caption: 'Average payment' },
                {
                    value: 15,
                    type: 'percentage',
                    caption: 'Repeat purchase rate',
                },
            ] as PaymentCardInfo[]
        }
    },

    methods: {
        ...mapMutations('config', ['toggleTheme'])
    }
}
</script>

<template>
    <div class="pa-4 container">
        <h1>Currency exchange</h1>
        <VBtn @click="toggleTheme">Toggle theme</VBtn>
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