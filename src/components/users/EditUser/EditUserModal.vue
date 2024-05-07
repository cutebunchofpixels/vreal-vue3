<script lang="ts">
import ModalWindow from '@/components/ui/ModalWindow/ModalWindow.vue';
import { keepModalFocus } from '@/components/mixins/keepModalFocus';
import EditUserCard from './EditUserCard.vue';

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
        userId: Number,
    },

    emits: {
        'update:model-value': (newValue: boolean) => true,
        submit: () => true,
    },

    components: {
        EditUserCard,
        ModalWindow
    },

    mixins: [keepModalFocus]
}
</script>

<template>
    <ModalWindow max-width="600" class="edit-user-modal" :model-value="modelValue"
        @update:model-value="(newValue) => $emit('update:model-value', newValue)">
        <EditUserCard @submit="$emit('submit')" :user-id="userId" ref="child" />
    </ModalWindow>
</template>