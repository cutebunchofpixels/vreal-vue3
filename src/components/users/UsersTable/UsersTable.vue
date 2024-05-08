<script lang="ts">
import EditUserModal from '../EditUser/EditUserModal.vue';
import type { GorestUser } from '@/types/models/Users/GorestUser';
import type { FetchUsersPayload } from '@/store/users/actions';

export default {
    data() {
        return {
            isEditModalVisible: false,
            selectedUserId: undefined as number | undefined,
        }
    },

    computed: {
        headers() {
            return [
                { width: "10%", sortable: false, title: this.$t("id"), key: 'id' },
                { width: "40%", sortable: false, title: this.$t("name"), key: 'name' },
                { width: "20%", sortable: false, title: this.$t("gender"), key: 'gender' },
                { width: "20%", sortable: false, title: this.$t("status"), key: 'status' },
                { width: "10%", sortable: false, title: this.$t("actions"), key: 'actions' },
            ]
        },

        users() {
            return this.$store.state.users.users
        },

        isLoading() {
            return this.$store.state.users.isLoading
        },

        totalItems() {
            return this.$store.state.users.totalItems
        },

        currentPage() {
            return this.$store.state.users.page
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

        handleCloseModal() {
            this.selectedUserId = undefined
        },

        handleRowClick(_: PointerEvent, { item }: { item: GorestUser }) {
            this.$router.push(`users/${item.id}`)
        }
    },

    components: {
        EditUserModal,
    },
}
</script>

<template>
    <EditUserModal :model-value="Boolean(selectedUserId)" @update:model-value="handleCloseModal"
        :userId="selectedUserId!" @submit="selectedUserId = undefined" />
    <VDataTableServer :items-length="totalItems" :headers="headers" :items="users" class="users-table"
        density="comfortable" :loading="isLoading" @update:page="handlePageChange" @click:row="handleRowClick"
        :page="currentPage" :items-per-page-options="[]">
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.actions="{ item }">
            <VBtn icon="mdi-pencil" size="x-small" variant="tonal" @click.stop="editItem(item)"
                aria-label="Open edit user modal" />
        </template>
        <template v-slot:no-data>
            {{ $t("noData") }}
        </template>
        <template v-slot:loading>
            <VSkeletonLoader type="table-row@10" />
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.gender="{ item }">
            {{ $t(item.gender) }}
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.status="{ item }">
            {{ $t(item.status) }}
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