<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

import { Gender } from '@/types/models/Users/Gender';
import { getEnumOptions } from '@/utils/getEnumOptions';
import type { FetchUsersPayload } from '@/store/users/actions';
import type { StoreState } from '@/store';

type FilterOption = Gender | "all"

const store = useStore<StoreState>()
const { t } = useI18n()

const option = ref<FilterOption>('all')
const filterOptions = [
    {
        label: t('all'),
        value: "all"
    },
    ...getEnumOptions<Gender>(Gender, label => t(label))
]

const fetchUsers = (payload: FetchUsersPayload) => store.dispatch('users/fetchUsers', payload)

async function handleOptionChange() {
    if (option.value === "all") {
        fetchUsers({ filters: { gender: undefined }, page: 1 })
    } else {
        fetchUsers({ filters: { gender: option.value }, page: 1 })
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