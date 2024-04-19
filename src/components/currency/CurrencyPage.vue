<script lang="ts">
import IntervalSelectors from './IntervalSelectors/IntervalSelectors.vue';

export default {
    components: {
        IntervalSelectors
    }
}
</script>

<template>
    <div class="pa-4 container">
        <h1>Currency exchange</h1>
        <IntervalSelectors />
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    width: 100%;
}
</style>