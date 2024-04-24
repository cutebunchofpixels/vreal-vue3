<script lang="ts">
import LayoutHeader from './Header/LayoutHeader.vue';
import LayoutFooter from './LayoutFooter.vue';
import LayoutContent from './LayoutContent.vue';

export default {
    components: {
        LayoutHeader, LayoutFooter, LayoutContent
    },
}
</script>


<template>
    <LayoutHeader />
    <LayoutContent />
    <LayoutFooter />
</template>

<style lang="scss" scoped></style>