<script setup lang="ts">
    interface Props {
        href: string
        type: string
    }
    const props: any= defineProps<Props>();

    const isExternalLink: boolean = props.href.indexOf('http') >= 0 ? true : false
</script>

<template>
    <a v-if="isExternalLink" :href=props.href :class=props.type><slot></slot></a>

    <NuxtLink v-else :class=props.type :to=props.href><slot></slot></NuxtLink>
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