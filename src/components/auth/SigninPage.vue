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
                const from = this.$router.currentRoute.value.query.from as string
                this.$router.push({ path: from || "currency", query: { from: undefined } })
            } catch (error) {
                this.$toast.error(this.$t("unexpectedError", { cause: "while signing-in" }))
            }
        }
    }
}
</script>

<template>
    <VCard class="signin-card" v-focus-first>
        <VCardTitle>
            Sign in to your account
        </VCardTitle>
        <VCardSubtitle class="subtitle">
            <CustomRouterLink to="signup" class="link">Create a new account</CustomRouterLink>
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

.subtitle {
    padding-block: 5px;
}
</style>