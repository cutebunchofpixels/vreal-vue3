<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

export interface ModalWindowProps {
    modelValue: boolean,
    focusTriggerAfterClose?: boolean
}

interface ModalWindowEmits {
    (e: 'update:model-value', newValue: boolean): void,
}

const props = withDefaults(defineProps<ModalWindowProps>(), { focusTriggerAfterClose: true })
const emit = defineEmits<ModalWindowEmits>()

const modalTrigger = ref<HTMLElement | null>(null)

async function handleModalToggle() {
    if (props.focusTriggerAfterClose) {
        await nextTick()
        setTimeout(() => { modalTrigger.value?.focus() }, 0)
    }

    emit("update:model-value", !props.modelValue)
}

watch(() => props.modelValue,
    (next) => {
        if (next) {
            modalTrigger.value = document.activeElement as HTMLElement
        }
    },
    { immediate: true }
)
</script>

<template>
    <VDialog v-bind="$attrs" :model-value="modelValue" @update:model-value="handleModalToggle">
        <slot />
    </VDialog>
</template>