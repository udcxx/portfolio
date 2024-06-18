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
            <li><a href="https://app.udcxx.me/">ツール・API</a></li>
            <li><a href="https://blog.udcxx.me/">ブログ</a></li>
        </ul>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100vw;
    margin-top: 20px;
    padding-left: 2em;
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
            right: 0;
        }
        &:nth-last-of-type(1)::after {
            content: none;
        }

        a {
            display: inline-block;
            padding: 0 2em;
            color: $gray;

            &:hover {
                color: $orange;
                text-shadow: 0px 0px 3px $black;
            }
        }
    }
}
</style>