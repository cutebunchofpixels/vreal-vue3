<script lang="ts">
import dayjs from 'dayjs'

import DatePicker from '@/components/ui/DatePicker/DatePicker.vue'

export default {
    data() {
        return {
            date: dayjs()
        }
    },

    components: {
        DatePicker
    },

}
</script>

<template>
    <v-form>
        <v-container>
            <v-row justify="space-between">
                <v-col cols="12" sm="6" md="auto" class="flex-grow-1">
                    <DatePicker v-model="date" label="Start date" />
                </v-col>
                <v-col cols="12" sm="6" md="auto" class="flex-grow-1">
                    <DatePicker v-model="date" label="End date" />
                </v-col>
                <v-col cols="12" md="3" class="d-flex flex-grow-1 justify-end justify-md-center">
                    <VBtn>
                        View report
                    </VBtn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<style lang="scss" scoped></style>