<script lang="ts">
import CurrentUser from './CurrentUser.vue';
import LocalePicker from './LocalePicker.vue';
import ThemeSwitch from './ThemeSwitch.vue';

export default {
    components: {
        ThemeSwitch, LocalePicker, CurrentUser
    },
}
</script>

<template>
    <VAppBar class="header">
        <VAppBarTitle class="appbar-title">Trainee mockup</VAppBarTitle>
        <CurrentUser />
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

    :deep(.v-toolbar__content) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    :deep(.v-toolbar-title) {
        flex: unset;
    }
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