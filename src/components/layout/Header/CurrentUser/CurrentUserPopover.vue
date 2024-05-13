<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import type { StoreState } from '@/store';

interface CurrentUserPopoverProps {
    modelValue: boolean;
    handleSignout: () => Promise<void>
}

interface CurrentUserPopoverEmits {
    (e: 'update:model-value', newValue: boolean): void,
}

defineProps<CurrentUserPopoverProps>()
defineEmits<CurrentUserPopoverEmits>()

const store = useStore<StoreState>()

const user = computed(() => store.state.auth.user!)
</script>

<template>
    <VMenu :model-value="modelValue" @update:model-value="newValue => $emit('update:model-value', newValue)"
        :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <VBtn icon="mdi-menu-down" density="compact" @click="$emit('update:model-value', !modelValue)"
                aria-label="Expand popover with current user" v-bind="props" />
        </template>
        <VCard min-width="300">
            <VList :tabindex="-1">
                <VListItem :title="user.displayName || user.email || 'Username'" :subtitle="$t('currentUser')" />
            </VList>
            <VDivider />
            <VCardActions>
                <VSpacer />
                <VBtn variant="text" prepend-icon="mdi-logout" @click="handleSignout">
                    {{ $t('signout') }}
                </VBtn>
            </VCardActions>
        </VCard>
    </VMenu>
</template>
