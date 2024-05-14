<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import UsersTable from './UsersTable/UsersTable.vue';
import UsersFilters from './UsersTable/UsersFilters.vue';
import ProtectedRoute from '../hoc/ProtectedRoute.vue';
import { useUsersStore } from '@/store/users';

const usersStore = useUsersStore()

const { isEmpty } = storeToRefs(usersStore)

onMounted(async () => {
    if (!isEmpty.value) {
        return
    }

    await usersStore.fetchUsers()
})
</script>

<template>
    <ProtectedRoute>
        <div class="users-page-wrapper" v-focus-first>
            <h1>{{ $t("usersPage") }}</h1>
            <div class="filters-wrapper">
                <UsersFilters />
            </div>
            <VCard>
                <VCardText>
                    <UsersTable />
                </VCardText>
            </VCard>
        </div>
    </ProtectedRoute>
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