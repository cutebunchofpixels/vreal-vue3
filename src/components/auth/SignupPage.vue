<script setup lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import SignupForm, { type SignupFormValues } from './SignupForm.vue';
import { auth } from '@/firebase';

const router = useRouter()
const toast = useToast()
const { t } = useI18n()

async function handleFormSubmit({ email, password }: SignupFormValues) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        router.push("currency")
    } catch (error) {
        toast.error(t("unexpectedError", { cause: "while creating a new account" }))
    }
}
</script>

<template>
    <VCard class="signup-card" v-focus-first>
        <VCardTitle>
            {{ t('createNewAccount') }}
        </VCardTitle>
        <VCardSubtitle class="subtitle">
            <CustomRouterLink to="signin">{{ t('useExistingAccount') }}</CustomRouterLink>
        </VCardSubtitle>
        <VCardText>
            <SignupForm :submit-caption="t('signup')" @submit="handleFormSubmit" />
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.signup-card {
    max-width: 600px;
    width: 100%;
    padding: 20px;
}

.subtitle {
    padding-block: 5px;
}
</style>