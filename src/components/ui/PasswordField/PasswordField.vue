<script setup lang="ts">
import { ref } from 'vue';

const isPasswordVisible = ref<boolean>(false)
</script>

<template>
    <VTextField v-bind="$attrs" @click:append-inner="isPasswordVisible = !isPasswordVisible"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'">
    </VTextField>
</template>

<style lang="scss" scoped></style>