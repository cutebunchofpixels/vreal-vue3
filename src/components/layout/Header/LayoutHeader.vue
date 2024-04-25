<script lang="ts">
import LocalePicker from './LocalePicker.vue';
import ThemeSwitch from './ThemeSwitch.vue';

export default {
    components: {
        ThemeSwitch, LocalePicker
    }
}
</script>

<template>
    <VAppBar class="header">
        <VAppBarTitle class="appbar-title">Trainee mockup</VAppBarTitle>
        <VSpacer />
        <div class="actions-wrapper">
            <ThemeSwitch />
            <LocalePicker />
        </div>
    </VAppBar>
</template>

<style lang="scss" scoped>
.header {
    flex: 0 0 64px;
    padding: 6px 20px;
}

.appbar-title {
    margin: 0;
}

.actions-wrapper {
    display: grid;
    grid-template-columns: auto 180px;
    align-items: center;
    gap: 20px;
}
</style>