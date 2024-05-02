<script lang="ts">
import type { GorestUser } from '@/types/models/Users/GorestUser';
import { mockUsers } from './mockUsers';
import EditUserModal from './EditUser/EditUserModal.vue';

export default {
    data() {
        return {
            headers: [
                { sortable: false, title: 'Id', key: 'id' },
                { sortable: false, title: 'Name', key: 'name' },
                { sortable: false, title: 'Gender', key: 'gender' },
                { sortable: false, title: 'Status', key: 'status' },
                { sortable: false, title: 'Actions', key: 'actions' },
            ],
            items: mockUsers,
            isEditModalVisible: false,
            selectedUserId: undefined as number | undefined
        }
    },

    methods: {
        editItem(item: GorestUser) {
            this.selectedUserId = item.id
        }
    },

    components: {
        EditUserModal
    }
}
</script>

<template>
    <EditUserModal :model-value="Boolean(selectedUserId)" @update:model-value="selectedUserId = undefined"
        :userId="selectedUserId!" :key="'edit-user-modal'" />
    <VDataTable :headers="headers" :items="items" class="users-table" density="comfortable">
        <template v-slot:item.actions="{ item }">
            <VBtn icon="mdi-pencil" size="x-small" variant="tonal" @click="editItem(item)" />
        </template>
        <template v-slot:no-data>
            No data
        </template>
    </VDataTable>
</template>

<style lang="scss" scoped>
.users-table {
    :deep(.v-data-table-footer__items-per-page) {
        display: none;
    }
}
</style>