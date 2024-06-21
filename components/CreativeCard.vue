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
    const isImage = props.eyecatch.match(/(jpg|jpeg|png|gif|bmp|svg|webp)$/).length() > 0 ? true : false;
</script>

<template>
    <a :href="href" class="card" :class="size" :target="target">
        <div class="image">
            <img v-if="isImage" :src="props.eyecatch" :alt="title">
            <span v-else class="emoji">🌻</span>
        </div>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
        <h3 class="title">{{ title }}</h3>
        <p class="discription">AIを使ったWebツール「RECITONE」を開発しました。<br>RECITONEは、kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
    </a>
</template>

<style lang="scss" scoped>
.card {
    display: block;
    position: relative;
}
</style>