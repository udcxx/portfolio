<script setup lang="ts">
    interface Props {
        href: string
        type: string
    }
    const props: any= defineProps<Props>();

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
        });

        // ヘッダー非表示
        const headerEl: any= document.querySelector('.header_bar');
        if (headerEl && headerEl.classList.contains('up')) {
            headerEl.classList.remove('up');
            headerEl.classList.add('down');
            setTimeout(() => {
                headerEl.style.opacity = 0;
            }, 500);
        }

        setTimeout(() => {
            headerEl.classList.remove('up');
            headerEl.classList.add('down');
            headerEl.style.opacity = 1;
        }, 1000);
    };
</script>

<template>
    <a v-if="props.href.indexOf('#') === 0" :class="props.type" @click="inPageScroll(props.href)"><slot /></a>

    <NuxtLink v-else :to="props.href" :class="props.type" @click="console.log(props.href.indexOf('#'))"><slot /></NuxtLink>
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