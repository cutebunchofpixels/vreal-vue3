<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import type { StoreState } from '@/store';

const store = useStore<StoreState>()
const router = useRouter()

const user = computed(() => store.state.auth.user)

watch(user, (next) => {
    if (!next) {
        router.replace('signin')
    }
})

</script>

<template>
    <slot />
</template>