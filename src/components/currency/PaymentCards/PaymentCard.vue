<script lang="ts">
import type { PropType } from 'vue'

type PaymentStatsCardType = 'currency' | 'percentage'

export interface PaymentCardInfo {
    type: PaymentStatsCardType
    caption: string
    value: number
}

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

export default {
    props: {
        card: {
            type: Object as PropType<PaymentCardInfo>,
            required: true,
        }

    },

    computed: {
        displayCaption() {
            const prefix = addons[this.card.type].prefix || ''
            const suffix = addons[this.card.type].suffix || ''
            const displayValue = this.card.value.toLocaleString('en-us', {
                minimumFractionDigits: 2,
            })
            return `${prefix}${displayValue}${suffix}`
        }
    },

    data() {
        return {
            addons: {
                currency: {
                    prefix: '$',
                },
                percentage: {
                    suffix: '%',
                },
            }
        }
    }
}
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