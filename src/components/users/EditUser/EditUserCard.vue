<script setup lang="ts">
import { ref } from 'vue';
import EditUserForm from './EditUserForm.vue';

interface EditUserCardProps {
    userId?: number
}

interface EditUserCardEmits {
    (e: 'update:model-value', newValue: boolean): void,
    (e: 'submit'): void,
}

defineProps<EditUserCardProps>()
defineEmits<EditUserCardEmits>()

const isLoading = ref<boolean>(false)
</script>

<template>
    <VCard class="edit-user-card" :loading="isLoading" :disabled="isLoading" ref="child">
        <VCardTitle>{{ $t('editUser') }}</VCardTitle>
        <VCardText class="card-body">
            <EditUserForm :userId="userId" @update:loading="(value) => { isLoading = value }"
                @submit="$emit('submit')" />
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.edit-user-card {
    padding: 20px;
    width: 100%;
}

.card-body {
    padding: 1rem !important;
}
</style>