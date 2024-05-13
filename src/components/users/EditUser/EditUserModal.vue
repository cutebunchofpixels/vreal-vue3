<script setup lang="ts">
import ModalWindow from '@/components/ui/ModalWindow/ModalWindow.vue';
import EditUserCard from './EditUserCard.vue';

interface EditUserModalProps {
    modelValue: boolean
    userId?: number
}

interface EditUserModalEmits {
    (e: 'update:model-value', newValue: boolean): void
    (e: 'submit'): void
}

defineProps<EditUserModalProps>()
defineEmits<EditUserModalEmits>()
</script>

<template>
    <ModalWindow max-width="600" class="edit-user-modal" :model-value="modelValue"
        @update:model-value="(newValue) => $emit('update:model-value', newValue)">
        <EditUserCard @submit="$emit('submit')" :user-id="userId" ref="child" v-keep-focus />
    </ModalWindow>
</template>