<script lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth';

import SignupForm, { type SignupFormValues } from './SignupForm.vue';
import { auth } from '@/firebase';

export default {
    components: {
        SignupForm,
    },

    methods: {
        async handleFormSubmit({ email, password }: SignupFormValues) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                const from = this.$route.query.from?.at(0)
                this.$router.push({ path: from || "currency", query: { from: undefined } })
            } catch (error) {
                this.$toast.error(this.$t("unexpectedError", { cause: "while signing-in" }))
            }
        }
    }
}
</script>

<template>
    <VCard class="signin-card">
        <VCardTitle>
            Sign in to your account
        </VCardTitle>
        <VCardSubtitle>
            <RouterLink to="signup">Create a new account</RouterLink>
        </VCardSubtitle>
        <VCardText>
            <SignupForm submit-caption="Sign in" @submit="handleFormSubmit" />
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.signin-card {
    max-width: 600px;
    width: 100%;
    padding: 20px;
}
</style>