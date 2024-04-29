<script lang="ts">
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
            showPassword: false,
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
        }
    },

    emits: {
        submit: (values: SignupFormValues) => true,
        'click:google': () => true,
    }
}
</script>

<template>
    <VForm class="signup-form" @submit="handleSubmit">
        <VTextField variant="outlined" v-model="email" label="Email" hide-details="auto" type="email"
            :rules="rules.email" />
        <VTextField variant="outlined" v-model="password" label="Password" hide-details="auto"
            :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword" :rules="rules.password" />
        <VBtn rounded variant="outlined" type="submit">{{ submitCaption }}</VBtn>
        <VDivider />
        <VBtn rounded variant="outlined" prepend-icon="mdi-google" @click="$emit('click:google')">Google</VBtn>
    </VForm>
</template>

<style lang="scss" scoped>
.signup-form {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>