<script setup>
    import { onMounted } from 'vue';
    onMounted(() => {
        if (window.innerWidth >= 768) {
            document.addEventListener('mousemove', (e) => {
                const h = window.scrollY;
                const x = e.clientX;
                const y = e.clientY;
                const gradient = `radial-gradient(circle at ${x}px ${y + h}px, rgb(102, 161, 102), rgb(6, 30, 34) 40%)`;
                document.querySelector('html').style.background = gradient;
            });   
        }
    });
</script>

<template>
    <PageHeader />
    <slot />
    <PageFooter />
</template>

<style lang="scss">
html {
    min-height: 100vh; min-height: 100lvh;
    background: radial-gradient(circle at 50% 50%, rgb(102, 161, 102), rgb(6, 30, 34) 40%);
}
</style>