<script setup lang="ts">
    interface Props {
        href: string,
        eyecatch?: string,
        title: string,
        subtitle?: string,
        isBig?: boolean
    };
    const props: any= defineProps<Props>();

    const target: string = props.href.indexOf('http') >= 0 ? '_blank' : '_self';
    const size: string = props.isBig ? 'big' : 'small';
    const eyecatchSrc: string = props.eyecatch ? props.eyecatch : 'https://placehold.jp/061E22/ffffff/800x600.png?text=NO%20IMAGE';
</script>

<template>
    <a :href="href" class="card" :class="size" :target="target">
        <AtomsBord>
            <div class="image">
                <img :src="eyecatchSrc" :alt="title">
            </div>
            <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
            <h3 class="title">{{ title }}</h3>
            <div class="discription"><slot /></div>
        </AtomsBord>
    </a>
</template>

<style lang="scss" scoped>
.card {
    display: block;
    position: relative;

    &.big {
        .image {
            width: 100%; height: 50vh;
        }
        .title {
            top: 4rem; left: 0;
        }
        .subtitle {
            top: 10rem; left: 0;
        }
        .discription {
            width: calc(100% - 2rem);
            margin: 0 auto;
            bottom: 1rem; left: 0; right: 0;
        }
    }

    &.small {
        .image {
            width: 60%; height: 30vh;
        }
        .title {
            top: 2rem; left: 55%;
        }
        .subtitle {
            top: 8rem; left: 55%;
        }
        .discription {
            width: calc(45% - 2rem);
            bottom: 2rem; right: 2rem;
        }
    }

    &:hover .image img {
        width: 105%;
        margin-left: -2.5%;
    }
}

.image {
    overflow: hidden;
    img {
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: top;
        transition: width 0.3s 0s, margin 0.3s 0s;
    }
}
.title {
    display: inline-block;
    padding: 1rem 1.5rem;
    @include fontsize(32);
    font-weight: bold;
    color: $black;
    line-height: 1em;
    position: absolute;
    // background-color: rgba(255, 255, 255, 0.6);
    background: linear-gradient(15deg, rgb(249, 248, 113), rgb(26, 117, 95));
    box-sizing: border-box;
}
.subtitle {
    display: inline-block;
    padding: 1rem 1.5rem;
    @include fontsize(18);
    color: $deep-green;
    line-height: 1em;
    position: absolute;
    background: linear-gradient(15deg, rgb(249, 248, 113), rgb(26, 117, 95));
    box-sizing: border-box;
}
.discription {
    padding: 1rem;
    @include fontsize(14, 16);
    line-height: 2em;
    color: $black;
    position: absolute;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: $light-green;
}
</style>