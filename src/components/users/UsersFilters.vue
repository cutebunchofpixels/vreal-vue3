<script lang="ts">
import { Gender } from '@/types/models/Users/Gender';
import { getEnumOptions } from '@/utils/getEnumOptions';
import type { FetchUsersPayload } from '@/store/users/actions';

type FilterOption = Gender | "all"

export default {
    data() {
        return {
            option: "all" as FilterOption
        }
    },


    computed: {
        filterOptions() {
            return [
                {
                    label: this.$t('all'),
                    value: "all"
                },
                ...getEnumOptions<Gender>(Gender, label => this.$t(label))
            ]
        }
    },

    methods: {
        async fetchUsers(payload: FetchUsersPayload) {
            await this.$store.dispatch('users/fetchUsers', payload)
        },

        async handleOptionChange() {
            if (this.option === "all") {
                this.fetchUsers({ filters: { gender: undefined }, page: 1 })
            } else {
                this.fetchUsers({ filters: { gender: this.option }, page: 1 })
            }
        }
    }
}
</script>

<template>
    <div class="filters-wrapper">
        <div>{{ $t("filterByGender") }}</div>
        <VSelect v-model="option" hide-details variant="outlined" :items="filterOptions" item-title="label"
            item-value="value" @update:model-value="handleOptionChange" />
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