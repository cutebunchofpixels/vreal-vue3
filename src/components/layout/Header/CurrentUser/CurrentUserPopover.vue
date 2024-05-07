<script lang="ts">
import type { PropType } from 'vue';
import { mapState } from 'vuex';

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },

        handleSignout: {
            type: Function as PropType<() => Promise<void>>,
            required: true,
        },
    },

    computed: {
        ...mapState("auth", ["user"]),
    }
}
</script>

<template>
    <VMenu :model-value="modelValue" @update:model-value="newValue => $emit('update:model-value', newValue)"
        :close-on-content-click="false" :target="$refs.target as HTMLButtonElement">
        <template v-slot:activator>
            <VBtn icon="mdi-menu-down" density="compact" @click="$emit('update:model-value', !modelValue)"
                ref="target" />
        </template>
        <VCard min-width="300">
            <VList :tabindex="-1">
                <VListItem :title="user.displayName || user.email" :subtitle="$t('currentUser')" />
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
