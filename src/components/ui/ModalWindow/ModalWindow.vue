<script lang="ts">
export default {
    data() {
        return {
            modalTrigger: null as HTMLElement | null
        }
    },

    props: {
        modelValue: Boolean,
        focusTriggerAfterClose: {
            type: Boolean,
            default: true,
        }
    },

    methods: {
        handleModalToggle() {
            if (this.focusTriggerAfterClose) {
                queueMicrotask(() => { this.modalTrigger?.focus() })
            }
            this.$emit("update:model-value", !this.modelValue)
        }
    },

    watch: {
        modelValue: {
            handler(next) {
                if (next) {
                    this.modalTrigger = document.activeElement as HTMLElement
                }
            },

            immediate: true,
        }
    },
}
</script>

<template>
    <VDialog v-bind="$attrs" :model-value="modelValue" @update:model-value="handleModalToggle">
        <slot />
    </VDialog>
</template>