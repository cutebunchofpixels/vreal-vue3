<script lang="ts">
import dayjs from 'dayjs'

import DatePicker from '@/components/ui/DatePicker/DatePicker.vue'

export default {
    data() {
        return {
            startDate: dayjs(),
            endDate: dayjs()
        }
    },

    components: {
        DatePicker
    },

}
</script>

<template>
    <VForm class="form-container">
        <VRow justify="space-between">
            <VCol cols="12" sm="6" md="auto" class="flex-grow-1">
                <DatePicker v-model="startDate" :label="$t('startDate')" />
            </VCol>
            <VCol cols="12" sm="6" md="auto" class="flex-grow-1">
                <DatePicker v-model="endDate" :label="$t('endDate')" />
            </VCol>
            <VCol cols="12" md="auto" class="d-flex justify-end">
                <VBtn>
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
