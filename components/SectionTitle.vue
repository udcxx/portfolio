<script setup lang="ts"> 
    interface Props {
        eng: string
    }
    const props = defineProps<Props>();
</script>

<template>
    <h2><span>{{ eng }}</span><slot /></h2>
</template>

<style lang="scss" scoped>
span {
    margin-bottom: 0.1em;
    display: block;
    text-align: center;
    font-size: 52px; font-weight: 500; font-family: $font-logo;
    color: $white;
}

h2 {
    margin-bottom: 3em;
    text-align: center;
    font-size: 18px; font-weight: 500;
    color: $gray;
}
</style>