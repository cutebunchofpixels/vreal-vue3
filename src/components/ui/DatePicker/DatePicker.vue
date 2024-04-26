<script lang="ts">
import { Dayjs } from 'dayjs';
import type { PropType } from 'vue';

export default {
    props: {
        modelValue: {
            type: Dayjs,
        },
        label: {
            type: String,
        },
        allowedDates: {
            type: Function as PropType<(value: Dayjs) => boolean>,
            default: () => true
        }
    },

    computed: {
        displayDate() {
            return this.modelValue ? this.modelValue.format("YYYY-MM-DD") : ''
        }
    },

    emits: {
        'update:model-value': (newValue: Dayjs) => true,
        clear: () => true,
    }
}
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
                hide-details="auto" @click:clear="$emit('clear')">
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

<style lang="scss">
.textfield {
    & .v-input__prepend {
        margin: 0 !important
    }

    & .v-field {
        width: 240px;

        &__outline {
            border: 1px solid var(--v-border-color);
        }

        &--variant-solo {
            box-shadow: none;
        }

        &__input {
            min-height: auto;
            padding: 10px 10px;
            line-height: 1;
        }

    }

}
</style>

<style lang="scss" scoped>
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