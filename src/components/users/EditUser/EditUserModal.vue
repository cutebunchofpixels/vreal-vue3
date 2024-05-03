<script lang="ts">
import EditUserForm from './EditUserForm.vue';

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

    components: {
        EditUserForm,
    },

    emits: {
        'update:model-value': (newValue: boolean) => true,
        submit: () => true,
    }
}
</script>

<template>
    <VDialog class="edit-user-modal" :model-value="modelValue"
        @update:model-value="(newValue) => $emit('update:model-value', newValue)">
        <VCard class="edit-user-card" :loading="isLoading" :disabled="isLoading">
            <VCardTitle>Edit user</VCardTitle>
            <VCardText class="card-body">
                <EditUserForm :userId="userId"
                    @update:loading="(value) => { isLoading = value; console.log('update-loading') }"
                    @submit="$emit('submit')" />
            </VCardText>
        </VCard>
    </VDialog>
</template>

<style lang="scss" scoped>
.edit-user-modal {
    max-width: 600px;

    :deep(.v-overlay__content) {
        margin: 0px;
        max-width: 100%;
        width: 100%;
    }
}

.edit-user-card {
    padding: 20px;
    width: 100%;
}

.card-body {
    padding: 1rem !important;
}
</style>