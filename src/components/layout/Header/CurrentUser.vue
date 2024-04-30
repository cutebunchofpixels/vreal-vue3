<script lang="ts">
import { mapState } from 'vuex';
import { signOut } from 'firebase/auth';

import { auth } from '@/firebase';

export default {
    computed: {
        ...mapState("auth", ["user"]),
    },

    methods: {
        async handleSignout() {
            try {
                await signOut(auth)
            } catch (error) {
                this.$toast.error("Unexpected error occured while signing-out. Please, try again")
            }
        }
    },
}
</script>

<template>
    <div v-if="user" class="current-user">
        <VAvatar :class="{ avatar: !user.photoURL }">
            <VImg v-if="user.photoURL" :src="user.photoURL" />
            <VIcon v-else icon="mdi-account-circle" />
        </VAvatar>
        <div>
            {{ user.displayName || user.email }}
        </div>
        <VBtn icon="mdi-logout" variant="elevated" @click="handleSignout" />
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