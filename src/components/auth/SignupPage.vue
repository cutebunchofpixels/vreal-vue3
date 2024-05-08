<script lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';

import SignupForm, { type SignupFormValues } from './SignupForm.vue';
import { auth } from '@/firebase';

export default {
    components: {
        SignupForm,
    },

    methods: {
        async handleFormSubmit({ email, password }: SignupFormValues) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                this.$router.push("currency")
            } catch (error) {
                this.$toast.error(this.$t("unexpectedError", { cause: "while creating a new account" }))
            }
        }
    }
}
</script>

<template>
    <VCard class="signup-card" v-focus-first>
        <VCardTitle>
            Create a new account
        </VCardTitle>
        <VCardSubtitle>
            <RouterLink to="signin">Use existing account</RouterLink>
        </VCardSubtitle>
        <VCardText>
            <SignupForm submit-caption="Sign up" @submit="handleFormSubmit" />
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.signup-card {
    max-width: 600px;
    width: 100%;
    padding: 20px;
}
</style>