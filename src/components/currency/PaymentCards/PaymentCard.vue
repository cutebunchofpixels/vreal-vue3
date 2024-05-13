<script setup lang="ts">
import { computed } from 'vue'

type PaymentStatsCardType = 'currency' | 'percentage'

export interface PaymentCardInfo {
    type: PaymentStatsCardType
    caption: string
    value: number
}

export interface PaymentCardProps {
    card: PaymentCardInfo
}

const props = defineProps<PaymentCardProps>()

const addons: Record<
    PaymentStatsCardType,
    { prefix?: string; suffix?: string }
> = {
    currency: {
        prefix: '$',
    },
    percentage: {
        suffix: '%',
    },
}

const displayCaption = computed(() => {
    const prefix = addons[props.card.type].prefix || ''
    const suffix = addons[props.card.type].suffix || ''
    const displayValue = props.card.value.toLocaleString('en-us', {
        minimumFractionDigits: 2,
    })
    return `${prefix}${displayValue}${suffix}`
})
</script>

<template>
    <VCard>
        <VCardText class="card-body">
            <VIcon icon="mdi-shopping-outline" class="card-icon" />
            <div class="stats">
                <div class="value">
                    {{ displayCaption }}
                </div>
                <div class="text-medium-emphasis text-uppercase">{{ card.caption }}</div>
            </div>
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.card-body {
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
    padding: 24px 40px;
    height: 100%;
}

.card-icon {
    font-size: 48px;
    font-weight: 400;
}

.stats {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.value {
    font-size: 32px;
}
</style>