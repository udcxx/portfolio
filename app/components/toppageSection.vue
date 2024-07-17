<script setup lang="ts">
    interface Props {
        titleJa: string,
        titleEn: string
    };
    const props: any= defineProps<Props>();
</script>

<template>
    <section :class="titleEn" class="wrap" :id="titleEn">
        <AtomsSectionTitle :eng="titleEn">{{ titleJa }}</AtomsSectionTitle>
        <slot />
    </section>
</template>

<style lang="scss">
.wrap {
    margin-bottom: 20rem;
}
</style>