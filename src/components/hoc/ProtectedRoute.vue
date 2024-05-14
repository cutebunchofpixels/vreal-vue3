<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/store/auth';


const authStore = useAuthStore()
const router = useRouter()

const { user } = storeToRefs(authStore)

watch(user, (next) => {
    if (!next) {
        router.replace('signin')
    }
})

</script>

<template>
    <slot />
</template>