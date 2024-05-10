<script setup lang="ts">
export interface CustomRouterLinkProps {
    to: string
}

defineProps<CustomRouterLinkProps>()

</script>

<template>
    <RouterLink v-bind="$attrs" :to="to" class="router-link">
        <slot />
    </RouterLink>
</template>

<style lang="scss" scoped>
.router-link {
    &:focus {
        outline: solid;
        outline-offset: 3px;
    }
}
</style>