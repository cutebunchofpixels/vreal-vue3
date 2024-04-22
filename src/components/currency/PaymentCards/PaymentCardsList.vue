<script lang="ts">
import type { PropType } from 'vue';
import PaymentCard, { type PaymentCardInfo } from './PaymentCard.vue';

export default {
    props: {
        cards: Array as PropType<PaymentCardInfo[]>
    },

    components: {
        PaymentCard
    }
}
</script>

<template>
    <div class="cards-list">
        <PaymentCard v-for="card in cards" :card="card" :key="card.caption" />
    </div>
</template>

<style lang="scss" scoped>
.cards-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
</style>