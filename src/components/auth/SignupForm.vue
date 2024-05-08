<script lang="ts">
import { signInWithPopup } from 'firebase/auth';

import { auth } from '@/firebase';
import { googleAuthProvider } from '@/firebase/googleAuth';
import PasswordField from '../ui/PasswordField/PasswordField.vue';

export interface SignupFormValues {
    email: string;
    password: string;
}

export default {
    props: {
        submitCaption: String,
    },

    data() {
        return {
            email: "",
            password: "",
            rules: {
                email: [
                    (value: string) => {
                        if (value) return true

                        return 'Email is a requred field'
                    },
                    (value: string) => {
                        if (/.+@.+\..+/.test(value)) return true

                        return 'Email must be valid'
                    },
                ],
                password: [
                    (value: string) => {
                        if (value) {
                            return true
                        }

                        return "Password is a required field"
                    }
                ],
            }
        }
    },

    methods: {
        handleSubmit(e: SubmitEvent) {
            e.preventDefault()
            const values = { email: this.email, password: this.password }
            this.$emit("submit", values)
        },

        async handleGoogleClick() {
            try {
                await signInWithPopup(auth, googleAuthProvider)
                const from = this.$router.currentRoute.value.query.from as string
                this.$router.push({ path: from || "currency", query: { from: undefined } })
            } catch (error) {
                this.$toast.error(this.$t("unexpectedError", { cause: "while signing-in with Google" }))
            }
        }
    },

    emits: {
        submit: (values: SignupFormValues) => true,
    },

    components: {
        PasswordField
    }
}
</script>

<template>
    <VForm class="signup-form" @submit="handleSubmit">
        <VTextField variant="outlined" v-model="email" label="Email" hide-details="auto" type="email"
            :rules="rules.email" />
        <PasswordField variant="outlined" v-model="password" label="Password" hide-details="auto"
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