<script lang="ts">
import { protectedRoute } from '../mixins/protectedRoute';
import UsersTable from './UsersTable.vue';

export default {
    components: {
        UsersTable,
    },

    beforeRouteEnter: protectedRoute.beforeRouteEnter,
    mixins: [protectedRoute]
}
</script>

<template>
    <div class="users-page-wrapper">
        <VCard>
            <VCardTitle>
                Users list
            </VCardTitle>
            <VCardText>
                <UsersTable />
            </VCardText>
        </VCard>
    </div>
</template>

<style lang="scss" scoped>
.users-page-wrapper {
    max-width: 1000px;
    width: 100%;
}
</style>