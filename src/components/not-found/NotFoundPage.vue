<template>
    <div class="not-found-wrapper" v-focus-first>
        <div class="status">404</div>
        <div class="message">Requested page does not exist</div>
        <VBtn @click="$router.replace('/')">Back to index</VBtn>
    </div>
</template>

<style lang="scss" scoped>
.not-found-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1;
    gap: 25px;
}

.status {
    font-size: 96px;
}

.message {
    font-size: 48px;
}
</style>