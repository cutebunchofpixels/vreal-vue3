<template>
    <v-main class="content">
        <RouterView />
    </v-main>
</template>

<style lang="scss" scoped>
.content {
    flex: 1 1 auto;
    overflow: auto;

    &> :first-child {
        margin: auto;
    }
}
</style>