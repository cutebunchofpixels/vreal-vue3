<script lang="ts">
import EditUserForm from './EditUserForm.vue';
import ModalWindow from '@/components/ui/ModalWindow/ModalWindow.vue';
import { keepModalFocus } from '@/components/mixins/keepModalFocus';

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
        userId: Number,
    },

    data() {
        return {
            isLoading: true
        }
    },

    emits: {
        'update:model-value': (newValue: boolean) => true,
        submit: () => true,
    },

    components: {
        EditUserForm,
        ModalWindow
    },

    mixins: [keepModalFocus]
}
</script>

<template>
    <ModalWindow max-width="600" class="edit-user-modal" :model-value="modelValue"
        @update:model-value="(newValue) => $emit('update:model-value', newValue)">
        <VCard class="edit-user-card" :loading="isLoading" :disabled="isLoading" ref="child">
            <VCardTitle>Edit user</VCardTitle>
            <VCardText class="card-body">
                <EditUserForm :userId="userId" @update:loading="(value) => { isLoading = value }"
                    @submit="$emit('submit')" />
            </VCardText>
        </VCard>
    </ModalWindow>
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