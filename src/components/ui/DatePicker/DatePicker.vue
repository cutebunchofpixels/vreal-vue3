<script setup lang="ts">
import { Dayjs } from 'dayjs';
import { computed } from 'vue';

export interface DatePickerProps {
    modelValue: Dayjs | null,
    label: string,
    allowedDates?: (value: Dayjs) => boolean
}

interface DatePickerEmits {
    (e: 'update:model-value', newValue: Dayjs | null): void,
    (e: 'clear'): void,
}

const props = withDefaults(defineProps<DatePickerProps>(), { allowedDates: () => true })
defineEmits<DatePickerEmits>()

const displayDate = computed(() => props.modelValue ? props.modelValue.format("YYYY-MM-DD") : '')

</script>

<template>
    <VRow align="center" dense>
        <VCol cols="12" sm="auto">
            <div class="text-subtitle-1">
                {{ label }}
            </div>
        </VCol>
        <VCol cols="12" sm="auto" class="flex-grow-1">
            <VTextField type="text" :model-value="displayDate" class="textfield" readonly clearable variant="solo"
                hide-details="auto" @click:clear="$emit('clear')" v-bind="$attrs">
                <template v-slot:prepend>
                    <div class="textfield-prepend-wrapper">
                        <VIcon icon="mdi-calendar-blank-outline" class="prepend-icon" />
                    </div>
                </template>
                <VMenu activator="parent" :close-on-content-click="false">
                    <VDatePicker :model-value="modelValue"
                        @update:model-value="(newValue) => $emit('update:model-value', newValue)" class="date-picker"
                        show-adjacent-months hide-header :allowed-dates="(date) => allowedDates(date as Dayjs)" />
                </VMenu>
            </VTextField>
        </VCol>
    </VRow>
</template>


<style lang="scss" scoped>
.textfield {
    :deep(.v-input__prepend) {
        margin: 0 !important
    }

    :deep(.v-field) {
        width: 240px;
    }

    :deep(.v-field__outline) {
        border: 1px solid var(--v-border-color);
    }

    :deep(.v-field--variant-solo) {
        box-shadow: none;
    }


    :deep(.v-field__input) {
        min-height: auto;
        padding: 10px 10px;
        line-height: 1;
    }
}

.textfield-prepend-wrapper {
    width: 100%;
    height: 100%;
    padding-inline: 10px;
    background: var(--v-border-color);
    display: grid;
    place-items: center;
}

.prepend-icon {
    color: var(--v-color-contrast)
}
</style>