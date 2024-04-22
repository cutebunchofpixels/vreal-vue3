<template>
    <VMain class="content">
        <RouterView />
    </VMain>
</template>

<style lang="scss" scoped>
.content {
    flex: 1 1 auto;
    display: flex;
    overflow: auto;
    align-items: center;
    justify-content: center;

    &> :first-child {
        margin: auto;
    }
}
</style>