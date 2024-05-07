<script lang="ts">
import type { Dayjs } from 'dayjs';
import { mapActions, mapGetters } from 'vuex';

import DatePicker from '@/components/ui/DatePicker/DatePicker.vue'
import { INITIAL_END_DATE, INITIAL_START_DATE, MAX_EXCHANGE_INTERVAL, MIN_EXCHANGE_INTERVAL } from '@/store/currency/constants';
import { dayjs } from '@/utils/dayjs';


export default {
    data() {
        return {
            startDate: this.loadedStartDate() || INITIAL_START_DATE as Dayjs | undefined,
            endDate: this.loadedEndDate() || INITIAL_END_DATE as Dayjs | undefined
        }
    },

    components: {
        DatePicker
    },

    methods: {
        ...mapActions("currency", ["fetchExchangeRates"]),
        ...mapGetters("currency", {
            loadedStartDate: "startDate",
            loadedEndDate: "endDate",
        }),

        isValidStartDate(startDate: Dayjs, endDate: Dayjs | undefined) {
            if (startDate.isAfter(dayjs())) {
                return false
            }

            if (!endDate) {
                return true
            }

            const minValidDays = MIN_EXCHANGE_INTERVAL - 1
            const maxValidDays = MAX_EXCHANGE_INTERVAL - 1
            const diff = endDate.diff(startDate, 'day')

            return diff >= minValidDays && diff <= maxValidDays
        },

        isValidEndDate(startDate: Dayjs | undefined, endDate: Dayjs) {
            if (endDate.isAfter(dayjs())) {
                return false
            }

            if (!startDate) {
                return true
            }

            const minValidDays = MIN_EXCHANGE_INTERVAL - 1
            const maxValidDays = MAX_EXCHANGE_INTERVAL - 1
            const diff = endDate.diff(startDate, 'day')

            return diff >= minValidDays && diff <= maxValidDays
        },

        async handleFormSubmit(e: SubmitEvent) {
            e.preventDefault()
            const { startDate, endDate } = this
            await this.fetchExchangeRates({ startDate, endDate })
        }
    }
}
</script>

<template>
    <VForm class="form-container" @submit="handleFormSubmit">
        <VRow justify="space-between">
            <VCol cols="12" sm="6" md="auto" class="flex-grow-1">
                <DatePicker v-model="startDate" :label="$t('startDate')"
                    :allowed-dates="(startDate) => isValidStartDate(startDate, endDate)"
                    @clear="startDate = undefined" />
            </VCol>
            <VCol cols="12" sm="6" md="auto" class="flex-grow-1">
                <DatePicker v-model="endDate" :label="$t('endDate')"
                    :allowed-dates="(endDate) => isValidEndDate(startDate, endDate)" @clear="endDate = undefined" />
            </VCol>
            <VCol cols="12" md="auto" class="d-flex justify-end">
                <VBtn :disabled="!(startDate && endDate)" type="submit">
                    {{ $t("viewReport") }}
                </VBtn>
            </VCol>
        </VRow>
    </VForm>
</template>


<style scoped lang="scss">
.form-container {
    padding: 10px;
}
</style>
