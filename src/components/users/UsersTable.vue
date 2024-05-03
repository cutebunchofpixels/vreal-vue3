<script lang="ts">
import EditUserModal from './EditUser/EditUserModal.vue';
import type { GorestUser } from '@/types/models/Users/GorestUser';
import type { FetchUsersPayload } from '@/store/users/actions';

export default {
    data() {
        return {
            headers: [
                { width: "10%", sortable: false, title: 'Id', key: 'id' },
                { width: "40%", sortable: false, title: 'Name', key: 'name' },
                { width: "20%", sortable: false, title: 'Gender', key: 'gender' },
                { width: "20%", sortable: false, title: 'Status', key: 'status' },
                { width: "10%", sortable: false, title: 'Actions', key: 'actions' },
            ],
            isEditModalVisible: false,
            selectedUserId: undefined as number | undefined,
        }
    },

    computed: {
        users() {
            return this.$store.state.users.users
        },

        isLoading() {
            return this.$store.state.users.isLoading
        },

        totalItems() {
            return this.$store.state.users.totalItems
        }

    },

    methods: {
        async fetchUsers(payload: FetchUsersPayload) {
            await this.$store.dispatch("users/fetchUsers", payload)
        },

        editItem(item: GorestUser) {
            this.selectedUserId = item.id
        },

        async handlePageChange(nextPage: number) {
            await this.fetchUsers({ page: nextPage })
        },

        async refreshUsers() {
            await this.fetchUsers({})
            this.selectedUserId = undefined
        }
    },

    components: {
        EditUserModal
    },
}
</script>

<template>
    <EditUserModal :model-value="Boolean(selectedUserId)" @update:model-value="selectedUserId = undefined"
        :userId="selectedUserId!" @submit="refreshUsers" />
    <VDataTableServer :items-length="totalItems" :headers="headers" :items="users" class="users-table"
        density="comfortable" :loading="isLoading" @update:page="handlePageChange">
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.actions="{ item }">
            <VBtn icon="mdi-pencil" size="x-small" variant="tonal" @click="editItem(item)" />
        </template>
        <template v-slot:no-data>
            No data
        </template>
        <template v-slot:loading>
            <VSkeletonLoader type="table-row@10" />
        </template>
    </VDataTableServer>
</template>

<style lang="scss" scoped>
.users-table {
    :deep(.v-data-table-footer__items-per-page) {
        display: none;
    }
}
</style>