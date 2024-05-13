<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';
import { useI18n } from 'vue-i18n';
import { signOut } from 'firebase/auth';

import { auth } from '@/firebase';
import CurrentUserPopover from './CurrentUserPopover.vue';
import type { StoreState } from '@/store';

const store = useStore<StoreState>()
const toast = useToast()
const { t } = useI18n()

const isPopoverVisible = ref<boolean>(false)
const user = computed(() => store.state.auth.user!)

async function handleSignout() {
    try {
        await signOut(auth)
    } catch (error) {
        toast.error(t("unexpectedError", { cause: "while signing-out" }))
    }
}

</script>

<template>
    <div v-if="user" class="current-user">
        <VAvatar :class="{ avatar: !user.photoURL }" aria-label="User avatar">
            <VImg v-if="user.photoURL" :src="user.photoURL" referrerpolicy="no-referrer" />
            <VIcon v-else icon="mdi-account-circle" />
        </VAvatar>
        <template v-if="$vuetify.display.mdAndUp">
            <div>
                {{ user.displayName || user.email }}
            </div>
            <VBtn icon="mdi-logout" variant="elevated" @click="handleSignout" aria-label="Signout" />
        </template>
        <CurrentUserPopover v-else v-model="isPopoverVisible" :handle-signout="handleSignout" />
    </div>
</template>

<style lang="scss" scoped>
.current-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.avatar {
    background-color: var(--v-border-color);
    color: var(--v-color-contrast);
}
</style>