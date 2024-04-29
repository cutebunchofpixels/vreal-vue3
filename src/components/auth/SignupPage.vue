<script lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from 'vue-toastification';

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
                await createUserWithEmailAndPassword(auth, email, password)
                this.$router.push("currency")
            } catch (error) {
                this.toast.error("An error occured while creating your account. Try again later")
            }
        }
    }
}
</script>

<template>
    <VCard class="signup-card">
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