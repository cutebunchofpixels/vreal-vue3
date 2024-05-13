<script setup lang="ts">
import PaymentCard, { type PaymentCardInfo } from './PaymentCard.vue';

export interface PaymentCardsListProps {
    cards: PaymentCardInfo[]
}

defineProps<PaymentCardsListProps>()
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