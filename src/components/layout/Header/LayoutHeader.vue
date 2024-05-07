<script lang="ts">
import CurrentUser from './CurrentUser/CurrentUser.vue';
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

    @include abstract.mixins-respond(sm) {
        :deep(.v-toolbar__content) {
            display: grid;
            grid-template-columns: repeat(3, 1fr)
        }
    }
}

.appbar-title {
    margin: 0;
}

.actions-wrapper {
    justify-self: end;
    display: grid;
    grid-template-columns: auto 120px;
    align-items: center;
    gap: 20px;
    justify-self: end;
}

.current-user {
    justify-self: center;
}
</style>