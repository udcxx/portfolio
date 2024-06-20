<template>
    <div class="bord">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.bord {
    padding: 2em;
    color: $white;
    font-size: 14px;
    line-height: 2em; letter-spacing: 0.05em;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    // border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    box-sizing: border-box;
}
</style>