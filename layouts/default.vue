<script setup>
    import { onMounted } from 'vue';
    onMounted(() => {
        if (window.innerWidth >= 768) {
            document.addEventListener('mousemove', (e) => {
                const h = window.scrollY;
                const x = e.clientX;
                const y = e.clientY;
                const gradient = `radial-gradient(circle at ${x}px ${y + h}px, rgb(102, 161, 102), rgb(6, 30, 34) 30%)`;
                document.body.style.background = gradient;
            });   
        }
    });
</script>

<template>
    <PageHeader />
    <main>
        <slot />
    </main>
    <PageFooter />
</template>

<style lang="scss">
html {
    background-color: $deep-green;
}
body {
    width: 100vw;
    min-height: 100vh; min-height: 100lvh;
    font-family: 'BIZ UDPGothic', 'Noto Color Emoji', sans-serif;
    @include fontsize(14);
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 50%, rgb(102, 161, 102), rgb(6, 30, 34) 30%);
}
</style>