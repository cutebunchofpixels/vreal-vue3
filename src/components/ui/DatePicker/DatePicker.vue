<script lang="ts">
import { Dayjs } from 'dayjs';

export default {
    props: {
        modelValue: {
            type: Dayjs,
            required: true,
        },
        label: {
            type: String,
            required: true,
        }
    },

    computed: {
        displayDate() {
            return this.modelValue.format("YYYY-MM-DD")
        }
    },
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
            <VTextField type="text" :value="displayDate" class="textfield" variant="solo" hide-details="auto">
                <template v-slot:prepend>
                    <div class="textfield-prepend-wrapper">
                        <VIcon icon="mdi-calendar-blank-outline" class="prepend-icon" />
                    </div>
                </template>
                <VMenu activator="parent">
                    <VDatePicker :model-value="modelValue"
                        @update:model-value="(newValue) => $emit('update:modelValue', newValue)" class="date-picker"
                        width="100%" show-adjacent-months hide-header />
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
        &__outline {
            border: 1px solid var(--v-border-color);
        }

        &--variant-solo {
            box-shadow: none;
        }

        &__input {
            min-height: auto;
            padding: 8px 10px;
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