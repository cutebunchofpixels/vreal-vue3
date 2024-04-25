<script lang="ts">
import ExchangePeriodDropdown from './ExchangePeriodDropdown.vue';
import ExchangeChart from './ExchangeChart.vue';

export default {
    components: {
        ExchangePeriodDropdown,
        ExchangeChart
    }
}
</script>

<template>
    <VCard>
        <VCardTitle class="chart-card-title">
            <div>{{ $t("exchangeRates") }}</div>
            <ExchangePeriodDropdown />
        </VCardTitle>
        <VCardText class="chart-card-body">
            <ExchangeChart />
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.chart-card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

.chart-card-body {
    padding: 0;
}
</style>