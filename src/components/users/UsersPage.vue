<script lang="ts">
import { protectedRoute } from '../mixins/protectedRoute';

export default {
    beforeRouteEnter: protectedRoute.beforeRouteEnter,
    mixins: [protectedRoute]
}
</script>

<template>
    <div>Users page</div>
</template>

<style lang="scss" scoped></style>