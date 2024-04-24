<script lang="ts">
import ThemeSwitch from './ThemeSwitch.vue';

export default {
    components: {
        ThemeSwitch
    }
}
</script>

<template>
    <VAppBar class="header">
        <VAppBarTitle class="appbar-title">Trainee mockup</VAppBarTitle>
        <VSpacer />
        <ThemeSwitch />
    </VAppBar>
</template>

<style lang="scss" scoped>
.header {
    flex: 0 0 64px;
    padding-inline: 12px;
}

.appbar-title {
    margin: 0;
}
</style>