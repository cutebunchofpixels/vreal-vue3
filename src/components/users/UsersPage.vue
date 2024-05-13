<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';


import UsersTable from './UsersTable/UsersTable.vue';
import UsersFilters from './UsersTable/UsersFilters.vue';
import ProtectedRoute from '../hoc/ProtectedRoute.vue';
import type { StoreState } from '@/store';
import type { FetchUsersPayload } from '@/store/users/actions';

const store = useStore<StoreState>()

const isEmpty = computed(() => store.getters['users/isEmpty'])
const fetchUsers = (payload: FetchUsersPayload) => store.dispatch('users/fetchUsers', payload)

onMounted(async () => {
    if (!isEmpty.value) {
        return
    }

    await fetchUsers({})
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