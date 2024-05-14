<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { Gender } from '@/types/models/Users/Gender';
import { getEnumOptions } from '@/utils/getEnumOptions';
import { useUsersStore } from '@/store/users';

type FilterOption = Gender | "all"

const usersStore = useUsersStore()
const { t } = useI18n()

const option = ref<FilterOption>('all')
const filterOptions = [
    {
        label: t('all'),
        value: "all"
    },
    ...getEnumOptions<Gender>(Gender, label => t(label))
]

async function handleOptionChange() {
    if (option.value === "all") {
        usersStore.fetchUsers({ filters: { gender: undefined }, page: 1 })
    } else {
        usersStore.fetchUsers({ filters: { gender: option.value }, page: 1 })
    }
}
</script>

<template>
    <div class="filters-wrapper">
        <div id="filtersCaption">{{ $t("filterByGender") }}</div>
        <VSelect v-model="option" hide-details variant="outlined" :items="filterOptions" item-title="label"
            item-value="value" @update:model-value="handleOptionChange" aria-label="Select a gender to filter by" />
    </div>
</template>

<style scoped lang="scss">
.filters-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    max-width: 450px;
}
</style>