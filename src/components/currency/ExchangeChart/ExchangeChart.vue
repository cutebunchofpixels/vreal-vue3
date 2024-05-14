<script setup lang="ts">
import { useStore } from 'vuex';
import Plotly, { newPlot, type Config, type Layout, type PlotData } from 'plotly.js';
import { computed, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';

import { Theme } from '@/types/Theme';
import type { CurrencyExchangeRates } from '@/types/models/CurrencyExchange/CurrencyExchangeRates';
import type { StoreState } from '@/store';
import { useConfigStore } from '@/store/config';

const store = useStore<StoreState>()
const configStore = useConfigStore()
const { t } = useI18n()

const { theme } = storeToRefs(configStore)
const exchangeRates = computed(() => store.state.currency.exchangeRates)
const isLoading = computed(() => store.state.currency.isLoading)
const chart = ref<HTMLInputElement | null>(null)
const data = computed<Partial<PlotData>[]>(() => {
    const dates = exchangeRates.value.map((item: CurrencyExchangeRates) => item.date.format("YYYY-MM-DD"))

    const usdTrace = {
        x: dates,
        y: exchangeRates.value.map((item: CurrencyExchangeRates) => 1 / item.exchangeRates.usd),
        name: "USD to UAH",
    }

    const eurTrace = {
        x: dates,
        y: exchangeRates.value.map((item: CurrencyExchangeRates) => 1 / item.exchangeRates.eur),
        name: "EUR to UAH",
    }

    return [usdTrace, eurTrace]
})
const layout = computed<Partial<Layout>>(() => ({
    margin: {
        t: 0,
    },

    xaxis: {
        showgrid: false,
        showline: true,
        showdividers: true,
        title: t("date"),
        ticks: 'outside',
        tickformat: "%Y-%m-%d",
        dtick: "D1",
    },

    yaxis: {
        title: t("exchangeRates")
    },

    font: {
        family: '"Roboto", sans-serif',
        color: theme.value === Theme.Light ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
    },

    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    autosize: true,

    showlegend: false,
}))
const config: Partial<Config> = {
    responsive: true,
    staticPlot: true,
}

function renderChart() {
    if (!data.value[0].x?.length || !chart.value) {
        return
    }

    Plotly.Plots.resize(chart.value)
    newPlot(chart.value, data.value, layout.value, config);
}

watchEffect(() => {
    renderChart()
})
</script>

<template>
    <div class="chart-container">
        <Transition>
            <VSkeletonLoader v-show="isLoading" type="card" />
        </Transition>
        <Transition>
            <div v-show="!isLoading" ref="chart" class="chart"></div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.chart-container {
    width: 100%;
    height: 400px;

    :deep(*) {
        height: 100%
    }

    :deep(.v-skeleton-loader__heading) {
        display: none;
    }

    :deep(.v-skeleton-loader__image) {
        width: 100%;
        height: 100%
    }
}

.chart {
    width: 100%;
    height: 400px;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>