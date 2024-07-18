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
            <li><AtomsLink href="https://app.udcxx.me/" color="gray">ツール・API</AtomsLink></li>
            <li><AtomsLink href="https://blog.udcxx.me/" color="gray">ブログ</AtomsLink></li>
            <li><AtomsLink href="https://udcxx.me/contact/" color="gray" :blank="true">お問い合わせ</AtomsLink></li>
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
    
    @media (max-width: $break) {
        flex-wrap: wrap;
    }
}

.copyright {
    font-size: 12px;
    text-align: left;

    @media (max-width: $break) {
        width: 100%;
        margin-bottom: 2em;
        text-align: center;
    }
}

ul {
    list-style-type: none;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;

    @media (max-width: $break) {
        margin: 0 auto;
        justify-content: center;
    }

    li {
        display: block;
        position: relative;
        text-align: center;
        font-size: 12px;
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