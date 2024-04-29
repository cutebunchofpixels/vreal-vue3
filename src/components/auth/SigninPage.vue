<script lang="ts">
import { useToast } from 'vue-toastification';
import { signInWithEmailAndPassword } from 'firebase/auth';

import SignupForm, { type SignupFormValues } from './SignupForm.vue';
import { auth } from '@/firebase';

export default {
    components: {
        SignupForm,
    },

    computed: {
        toast() {
            return useToast()
        }
    },

    methods: {
        async handleFormSubmit({ email, password }: SignupFormValues) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                this.$router.push("currency")
            } catch (error) {
                this.toast.error("An unexpected error occured while signing-in. Please, try again")
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