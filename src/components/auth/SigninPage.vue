<script lang="ts">
import SignupForm from './SignupForm.vue';

export default {
    components: {
        SignupForm,
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
            <SignupForm submit-caption="Sign in" />
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