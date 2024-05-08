<script lang="ts">
import type { VBtn } from 'vuetify/components';
import { mapActions } from 'vuex';

import { getEnumOptions } from '@/utils/getEnumOptions';
import { dayjs } from '@/utils/dayjs';
import { MAX_EXCHANGE_INTERVAL } from '@/store/currency/constants';


enum IntervalOption {
    CurrentWeek = "currentWeek",
    PreviousWeek = "previousWeek",
}

function getIntervalDates(option: IntervalOption) {
    let startDate = dayjs().subtract(MAX_EXCHANGE_INTERVAL - 1, 'day')
    let endDate = dayjs()

    if (option === IntervalOption.PreviousWeek) {
        startDate = dayjs().subtract(1, 'week')
        endDate = startDate.add(MAX_EXCHANGE_INTERVAL - 1, 'day')
    }

    return { startDate, endDate }
}

export default {
    computed: {
        options() {
            return getEnumOptions<IntervalOption>(IntervalOption, (label) => this.$t(label))
        }
    },

    methods: {
        ...mapActions("currency", ["fetchExchangeRates"]),

        handleOptionSelect(option: IntervalOption) {
            const dates = getIntervalDates(option);
            this.fetchExchangeRates(dates);
            (this.$refs.button as VBtn).$el.focus()
        }
    }
}
</script>

<template>
    <VBtn ref="button" aria-label="Select exchange interval">
        {{ $t("interval") }}
        <VMenu activator="parent">
            <VList>
                <VListItem v-for="option in options" :key="option.label" :value="option.label"
                    @click="handleOptionSelect(option.value)">
                    <VListItemTitle>{{ option.label }}</VListItemTitle>
                </VListItem>
            </VList>
        </VMenu>
    </VBtn>
</template>