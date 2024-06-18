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
    display: block;
    text-align: center;
    font-size: 52px; font-weight: 500; font-family: 'Ubuntu';
    color: $white;
}

h2 {
    text-align: center;
    font-size: 18px; font-weight: 500;
    color: $white;
}
</style>