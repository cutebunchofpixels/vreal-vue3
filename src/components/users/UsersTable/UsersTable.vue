<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';

import EditUserModal from '../EditUser/EditUserModal.vue';
import type { GorestUser } from '@/types/models/Users/GorestUser';

import { useUsersStore } from '@/store/users';

const { t } = useI18n()
const usersStore = useUsersStore()
const router = useRouter()

const selectedUserId = ref<number | undefined>(undefined)
const headers = computed(() => [
    { width: "10%", sortable: false, title: t("id"), key: 'id' },
    { width: "40%", sortable: false, title: t("name"), key: 'name' },
    { width: "20%", sortable: false, title: t("gender"), key: 'gender' },
    { width: "20%", sortable: false, title: t("status"), key: 'status' },
    { width: "10%", sortable: false, title: t("actions"), key: 'actions' },
])

const { users, isLoading, totalItems, page: currentPage } = storeToRefs(usersStore)

const editItem = (item: GorestUser) => selectedUserId.value = item.id
const handlePageChange = async (nextPage: number) => await usersStore.fetchUsers({ page: nextPage })
const handleCloseModal = () => selectedUserId.value = undefined
const handleRowClick = (_: PointerEvent, { item }: { item: GorestUser }) => router.push(`users/${item.id}`)
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