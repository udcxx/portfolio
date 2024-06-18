<script setup lang="ts">
    const date :Date = new Date();
    const year :Number = date.getFullYear();
</script>

<template>
    <footer>
        <div class="copyright">
            &copy; {{ year }} udcxx.
        </div>
        <ul>
            <li><TextLink href="https://app.udcxx.me/" type="gray">ツール・API</TextLink></li>
            <li><TextLink href="https://blog.udcxx.me/" type="gray">ブログ</TextLink></li>
        </ul>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100vw;
    margin-top: 20px;
    padding: 2em 0 2em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $gray;
    position: relative;
    bottom: 0;
}

ul {
    list-style-type: none;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;

    li {
        display: block;
        position: relative;
        text-align: center;
        flex-shrink: 0;

        &::after {
            content: '｜';
            position: absolute;
            right: -0.5em;
        }
        &:nth-last-of-type(1)::after {
            content: none;
        }

        a {
            display: inline-block;
            padding: 0 2em;
        }
    }
}
</style>