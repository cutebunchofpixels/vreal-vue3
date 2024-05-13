<script setup lang="ts">
import CurrentUser from './CurrentUser/CurrentUser.vue';
import LocalePicker from './LocalePicker.vue';
import ThemeSwitch from './ThemeSwitch.vue';
</script>

<template>
    <VAppBar class="header">
        <VAppBarTitle v-if="$vuetify.display.smAndUp" class="appbar-title">Trainee mockup</VAppBarTitle>
        <CurrentUser class="current-user" />
        <div class="actions-wrapper">
            <ThemeSwitch />
            <LocalePicker />
        </div>
    </VAppBar>
</template>

<style lang="scss" scoped>
@use "@/sass/abstract";

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
    max-width: 220px;
    width: 100%
}

.actions-wrapper {
    justify-self: end;
    display: grid;
    grid-template-columns: auto 120px;
    align-items: center;
    gap: 20px;
    justify-self: end;
    max-width: 220px;
    width: 100%
}

.current-user {
    justify-self: center;
}
</style>