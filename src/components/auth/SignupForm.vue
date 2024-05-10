<script setup lang="ts">
import { signInWithPopup } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useI18n } from 'vue-i18n';

import { auth } from '@/firebase';
import { googleAuthProvider } from '@/firebase/googleAuth';
import PasswordField from '../ui/PasswordField/PasswordField.vue';

export interface SignupFormValues {
    email: string;
    password: string;
}

export interface SignupFormEmits {
    (e: 'submit', values: SignupFormValues): void,
}

export interface SignupFormProps {
    submitCaption: string
}

defineProps<SignupFormProps>()
const emit = defineEmits<SignupFormEmits>()

const router = useRouter()
const toast = useToast()
const { t } = useI18n()

const values = ref<SignupFormValues>({ email: '', password: '' })
const rules = {
    email: [(value: string) => {
        if (value) return true

        return 'Email is a requred field'
    },
    (value: string) => {
        if (/.+@.+\..+/.test(value)) return true

        return 'Email must be valid'
    }],
    password: [(value: string) => {
        if (value) {
            return true
        }

        return "Password is a required field"
    }],
}

function handleSubmit() {
    emit("submit", values.value)
}

async function handleGoogleClick() {
    try {
        await signInWithPopup(auth, googleAuthProvider)
        const from = router.currentRoute.value.query.from as string
        router.push({ path: from || "currency", query: { from: undefined } })
    } catch (error) {
        toast.error(t("unexpectedError", { cause: "while signing-in with Google" }))
    }
}
</script>

<template>
    <VForm class="signup-form" @submit.prevent="handleSubmit">
        <VTextField variant="outlined" v-model="values.email" :label="t('email')" hide-details="auto" type="email"
            :rules="rules.email" />
        <PasswordField variant="outlined" v-model="values.password" :label="t('password')" hide-details="auto"
            :rules="rules.password" />
        <VBtn rounded variant="outlined" type="submit">{{ submitCaption }}</VBtn>
        <VDivider />
        <VBtn rounded variant="outlined" prepend-icon="mdi-google" @click="handleGoogleClick"
            aria-label="Sign in with Google">Google</VBtn>
    </VForm>
</template>

<style lang="scss" scoped>
.signup-form {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>