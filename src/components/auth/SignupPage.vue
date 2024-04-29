<script lang="ts">
import SignupForm from './SignupForm.vue';

export default {
    components: {
        SignupForm,
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
            <SignupForm submit-caption="Sign up" />
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