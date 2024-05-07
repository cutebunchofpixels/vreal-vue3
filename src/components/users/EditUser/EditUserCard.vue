<script lang="ts">
import EditUserForm from './EditUserForm.vue';

export default {
    data() {
        return {
            isLoading: false,
        }
    },

    props: {
        userId: Number
    },

    emits: {
        'update:model-value': (newValue: boolean) => true,
        submit: () => true,
    },

    components: {
        EditUserForm
    }
}
</script>

<template>
    <VCard class="edit-user-card" :loading="isLoading" :disabled="isLoading" ref="child">
        <VCardTitle>Edit user</VCardTitle>
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