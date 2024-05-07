<template>
    <VFooter class="footer">
        Footer
        <nav class="navigation">
            <ul class="nav-list">
                <li>
                    <RouterLink to="/signin">Signin</RouterLink>
                </li>
                <li>
                    <RouterLink to="/signup">Signup</RouterLink>
                </li>
                <li>
                    <RouterLink to="/currency">Currency</RouterLink>
                </li>
                <li>
                    <RouterLink to="/users">Users</RouterLink>
                </li>
            </ul>
        </nav>
    </VFooter>
</template>

<style lang="scss" scoped>
.footer {
    flex: 0 0 64px;
}

.navigation {
    margin-inline-start: auto;
}

.nav-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>