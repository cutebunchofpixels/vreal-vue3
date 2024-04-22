<script lang="ts">
import IntervalSelectors from './IntervalSelectors/IntervalSelectors.vue';
import type { PaymentCardInfo } from './PaymentCards/PaymentCard.vue';
import PaymentCardsList from './PaymentCards/PaymentCardsList.vue';

export default {
    components: {
        IntervalSelectors,
        PaymentCardsList
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
    }
}
</script>

<template>
    <div class="pa-4 container">
        <h1>Currency exchange</h1>
        <IntervalSelectors />
        <PaymentCardsList :cards="cards" />
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 35px;
    height: 100%;
    justify-content: center
}
</style>