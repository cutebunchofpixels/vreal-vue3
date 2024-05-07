<script lang="ts">
import { mapActions, mapGetters } from 'vuex';

import { protectedRoute } from '../mixins/protectedRoute';
import UsersTable from './UsersTable.vue';
import UsersFilters from './UsersFilters.vue';

export default {
    computed: {
        ...mapGetters('users', ['isEmpty'])
    },

    methods: {
        ...mapActions('users', ["fetchUsers"])
    },

    mounted() {
        if (this.isEmpty) {
            this.fetchUsers()
        }
    },

    components: {
        UsersTable,
        UsersFilters
    },

    beforeRouteEnter: protectedRoute.beforeRouteEnter,
    mixins: [protectedRoute]
}
</script>

<template>
    <div class="users-page-wrapper">
        <h1>Users page</h1>
        <div class="filters-wrapper">
            <UsersFilters />
        </div>
        <VCard>
            <VCardText>
                <UsersTable />
            </VCardText>
        </VCard>
    </div>
</template>

<style lang="scss" scoped>
.users-page-wrapper {
    padding: 10px 30px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>