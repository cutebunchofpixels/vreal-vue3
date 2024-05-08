<script lang="ts">
export default {
    props: {
        to: {
            type: String,
            required: true,
        }
    }
}
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