<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';

import EditUserCard from './EditUserCard.vue';

const router = useRouter()

const userId = computed(() => Number(router.currentRoute.value.params.id))
const handleSubmit = () => router.push('/users')

</script>

<template>
  <div class="edit-user-wrapper" v-focus-first>
    <h1>{{ $t('editUser') }}</h1>
    <EditUserCard :userId="userId" @submit="handleSubmit" />
  </div>
</template>

<style lang="scss" scoped>
.edit-user-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
}
</style>