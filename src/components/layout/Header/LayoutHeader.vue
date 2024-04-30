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
        <CurrentUser class="current-user" />
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
        display: grid;
        grid-template-columns: repeat(3, 1fr)
    }

    :deep(.v-toolbar-title) {
        flex: unset;
    }
}

.appbar-title {
    margin: 0;
}

.actions-wrapper {
    justify-self: end;
    display: grid;
    grid-template-columns: auto 180px;
    align-items: center;
    gap: 20px;
    justify-self: end;
}

.current-user {
    justify-self: center;
}
</style>