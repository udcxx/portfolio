<script setup lang="ts">
    interface Props {
        year: String,
        title: String,
        tags: Array<String>
    }
    const props :any = defineProps<Props>();
</script>

<template>
    <AtomsBord>
        <span class="year">{{ year }}</span>
        <p class="title">{{ title }}</p>
        <ul class="tags">
            <li class="tag" v-for="(item, index) in tags" :key="index">{{ item }}</li>
        </ul>
        <div class="description"><slot /></div>
    </AtomsBord>
</template>

<style lang="scss">
    .bord {
        padding: 3rem 1rem 1rem 3rem;
        position: relative;
    }
    .year {
        @include fontsize(80);
        font-family: $font-logo;
        position: relative;
        top: -1.7rem; left: -1.5rem;
        opacity: 0.1;
        color: $light-gray;
        line-height: 1em;
    }
    .title {
        @include fontsize(24);
        font-weight: bold;
        position: absolute;
        top: 5rem; left: 5rem;
    }
    .description {
        width: 100%;
    }
    .tags {
        list-style: none;
        position: absolute;
        top: 1rem; right: 1rem;

        .tag {
            margin: 0 0.5rem;
            padding: 0 0.5em;
            display: inline-block;
            font-size: 12px;
            line-height: 2em;
            background-color: $light-green;
            border-radius: 10px;

            &:nth-last-of-type(1) {
                margin: 0 0 0 0.5rem;
            }
        }
    }
</style>