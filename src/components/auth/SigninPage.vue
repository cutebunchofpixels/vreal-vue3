<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useI18n } from 'vue-i18n';

import SignupForm, { type SignupFormValues } from './SignupForm.vue';
import { auth } from '@/firebase';

const router = useRouter()
const toast = useToast()
const { t } = useI18n()

async function handleFormSubmit({ email, password }: SignupFormValues) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        const from = router.currentRoute.value.query.from as string
        router.push({ path: from || "currency", query: { from: undefined } })
    } catch (error) {
        toast.error(t("unexpectedError", { cause: "while signing-in" }))
    }
}
</script>

<template>
    <VCard class="signin-card" v-focus-first>
        <VCardTitle>
            {{ t('signinToYourAccount') }}
        </VCardTitle>
        <VCardSubtitle class="subtitle">
            <CustomRouterLink to="signup" class="link">{{ t("createNewAccount") }}</CustomRouterLink>
        </VCardSubtitle>
        <VCardText>
            <SignupForm :submit-caption="t('signin')" @submit="handleFormSubmit" />
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.signin-card {
    max-width: 600px;
    width: 100%;
    padding: 20px;
}

.subtitle {
    padding-block: 5px;
}
</style>