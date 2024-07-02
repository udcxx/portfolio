<script setup>
    import { ref, onMounted } from 'vue';

    let direction = ref('down');
    let currentY = 0;

    onMounted(() => {
        // 背景グラデーション用のmousemoveイベント
        if (window.innerWidth >= 768) {
            document.addEventListener('mousemove', (e) => {
                const h = window.scrollY;
                const x = e.clientX;
                const y = e.clientY;
                const gradient = `radial-gradient(circle at ${x}px ${y + h}px, rgb(102, 161, 102), rgb(6, 30, 34) 30%)`;
                document.body.style.background = gradient;
            });   
        };

        // ヘッダー用の scroll イベント
        document.addEventListener('scroll', () => {
            let scrolledY = window.scrollY;
            direction.value = currentY <= scrolledY ? 'down' : 'up';
            currentY = scrolledY;
        });
    });
</script>

<template>
    <PageHeader :direction="direction" />
    <main>
        <slot />
    </main>
    <PageFooter />
</template>

<style lang="scss">
html {
    font-size: 10px;
    background-color: $deep-green;
}
body {
    width: 100vw;
    min-height: 100vh; min-height: 100lvh;
    font-family: 'BIZ UDPGothic', 'Noto Color Emoji', sans-serif;
    overflow-x: hidden;
    background: radial-gradient(circle at right 50vh, rgb(102, 161, 102), rgb(6, 30, 34) 30%);
}
</style>