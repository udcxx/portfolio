<script setup lang="ts">
    interface Props {
        href: string|URL,
        color?: 'black'|'gray'|'light-green'|null|undefined,
        type?: 'text'|'button'|null|undefined,
        blank?: boolean
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
    <a v-if="props.href.indexOf('#') === 0" 
        :class="[props.type ? type : 'text', props.color ? color : 'black']"
        @click="inPageScroll(props.href)">
            <slot />
    </a>

    <NuxtLink v-else 
        :to="props.href" 
        :class="[props.type ? type : 'text', props.color ? color : 'black']"
        :target="props.blank ? '_blank' : '_self'"
        @click="console.log(props.href.indexOf('#'))">
            <slot />
    </NuxtLink>
</template>

<style lang="scss" scoped>
a {
    cursor: pointer;
}

.black {
    color: $black;

    &:hover {
        color: $orange;
    }
}

.gray {
    color: $gray;

    &:hover {
        color: $orange;
        text-shadow: 0px 0px 3px $black;
    }
}

.light-green {
    color: $light-green;

    &:hover {
        color: $orange;
        text-shadow: 0px 0px 3px $black;
    }

    &.button {
        color: $white;
        background-color: $light-green;
        border: solid 1px $light-green;
        box-shadow: 0px 0px 2px $deep-green;
        transition: color 0.3s 0s, background-color 0.3s 0s;

        &:hover {
            color: $light-green;
            font-weight: bold;
            background-color: $white;
            text-shadow: none;
        }
    }
}

.button {
    display: block;
    padding: 1em;
    text-align: center;
    text-indent: -0.5em;
    position: relative;
    border-radius: 10px;

    &::before {
        content: '〉';
        position: absolute;
        right: 1.5em; top: 50%;
        transform: translateY(-50%);
    }
}

</style>