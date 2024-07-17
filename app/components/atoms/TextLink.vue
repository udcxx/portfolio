<script setup lang="ts">
    interface Props {
        href: string
        type: string
    }
    const props: any= defineProps<Props>();
    
    let linkToType: 'inPage'|'outPage' = props.href.indexOf('#') === 0 ? 'inPage' : 'outPage';

    const inPageScroll = (href: string) => {
        setSmoothScroll(href);
        const url: string = location.hash ? location.href.replace(location.hash, href) : location.href + href;
        history.pushState(null, '', url);
    }

    const setSmoothScroll = (target: any) => {
        const to = document.querySelector(target);
        let excHeight = 0;
        const top = to.getBoundingClientRect().top - excHeight + window.scrollY;
        window.scroll({
            top: top,
            behavior: "smooth"
        })
    };
</script>

<template>
    <NuxtLink v-if="linkToType = 'outPage'" :to="props.href" :class="props.type"><slot /></NuxtLink>

    <a v-else-if="linkToType = 'inPage'" :class="props.type" @click="inPageScroll(props.href)"><slot /></a>
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