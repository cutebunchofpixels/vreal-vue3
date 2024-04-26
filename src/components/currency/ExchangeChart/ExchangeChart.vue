<script lang="ts">
import { mapState } from 'vuex';
import { newPlot, type Config, type Data, type Layout } from 'plotly.js';

import { Theme } from '@/types/Theme';
import type { CurrencyExchangeRates } from '@/types/models/CurrencyExchange/CurrencyExchangeRates';

interface ChartOptions {
    data: Data[],
    layout: Partial<Layout>,
    config: Partial<Config>
}

export default {
    computed: {
        ...mapState("currency", ["exchangeRates", "isLoading"]),
        ...mapState("config", ["theme"]),

        chartData(): Data[] {
            const dates = this.exchangeRates.map((item: CurrencyExchangeRates) => item.date.format("YYYY-MM-DD"))

            const usdTrace: Data = {
                x: dates,
                y: this.exchangeRates.map((item: CurrencyExchangeRates) => 1 / item.exchangeRates.usd),
                name: "USD to UAH",
            }

            const eurTrace: Data = {
                x: dates,
                y: this.exchangeRates.map((item: CurrencyExchangeRates) => 1 / item.exchangeRates.eur),
                name: "EUR to UAH",
            }

            return [usdTrace, eurTrace]
        },

        chartLayout(): Partial<Layout> {
            return {
                margin: {
                    t: 0,
                },

                xaxis: {
                    showgrid: false,
                    showline: true,
                    showdividers: true,
                    title: this.$t("date"),
                    ticks: 'outside',
                    tickformat: "%Y-%m-%d"
                },

                yaxis: {
                    title: this.$t("exchangeRates")
                },

                font: {
                    family: '"Roboto", sans-serif',
                    color: this.theme === Theme.Light ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                },

                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgba(0,0,0,0)',

                showlegend: false,
            }
        },

        chartConfig(): Partial<Config> {
            return {
                responsive: true,
                staticPlot: true,
            }
        },

        chartOptions(): ChartOptions {
            return {
                data: this.chartData,
                layout: this.chartLayout,
                config: this.chartConfig,
            }
        }
    },

    watch: {
        chartOptions(options: ChartOptions) {
            if (options.data) {
                const chartContainer = this.$refs.chartContainer as HTMLDivElement;
                newPlot(chartContainer, options.data, options.layout, options.config);
            }
        }
    },
}
</script>

<template>
    <div ref="chartContainer" class="chart-container">
        <VSkeletonLoader v-if="isLoading" type="card" />
    </div>
</template>

<style lang="scss">
.chart-container {
    & * {
        height: 100%
    }

    .v-skeleton-loader__heading {
        display: none;
    }

    .v-skeleton-loader__image {
        width: 100%;
        height: 100%
    }
}
</style>

<style lang="scss" scoped>
.chart-container {
    width: 100%;
    height: 400px;
}
</style>