<script lang="ts">
import { newPlot, type Config, type Layout } from 'plotly.js';

const chartLayout: Partial<Layout> = {
    margin: {
        t: 0,
        r: 30,
        l: 30,
    },
    xaxis: {
        showgrid: false,
        showline: true,
        showdividers: true,
        title: "Date",
        ticks: 'outside',
        tickformat: "%Y-%m-%d"
    },
    font: {
        family: '"Roboto", sans-serif'
    },
    showlegend: false,

}

const trace1 = {
    x: ["2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20"],
    y: [10, 15, 13, 17],
    name: "USD to UAH"
};

const trace2 = {
    x: ["2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20"],
    y: [16, 5, 11, 9],
    name: "EUR to UAH"
};

const chartConfig: Partial<Config> = {
    responsive: true,
    staticPlot: true,
}

export default {
    mounted() {
        const chartContainer = this.$refs.chartContainer as HTMLDivElement;

        newPlot(chartContainer, [trace1, trace2], chartLayout, chartConfig);
    },
}
</script>

<template>
    <div ref="chartContainer" class="chart-container"></div>
</template>

<style lang="scss" scoped>
.chart-container {
    width: 100%;
    height: 400px;
}
</style>