<script setup lang="ts">
    interface Props {
        href: string
        type: string
    }
    const props = defineProps<Props>();

    const isExternalLink = props.href.indexOf('http') >= 0 ? true : false
</script>

<template>
    <a v-if="isExternalLink" :href=href :class=type><slot></slot></a>

    <NuxtLink v-else :class=type :to="href"><slot></slot></NuxtLink>
</template>

<style lang="scss" scoped>
.black {
    color: $black;

    &:hover {
        color: $orange;
        // text-shadow: 0px 0px 3px $black;
    }
}

.gray {
    color: $gray;

    &:hover {
        color: $orange;
        text-shadow: 0px 0px 3px $black;
    }
}



</style>