<template>
    <div class="header">
        <div class="header_bar">
            <h1>udcxx.</h1>
            <ul>
                <li><a href="https://app.udcxx.me/">ツール・API</a></li>
                <li><a href="https://blog.udcxx.me/">ブログ</a></li>
            </ul>
        </div><!-- /header_bar -->
    </div><!-- /header -->
</template>

<style scoped lang="scss">
.header {
    padding-top: 90px;
}
.header_bar {
    width: 98%; max-width: 1280px; height: 50px;
    margin: 0 auto;
    padding-left: 2em;
    color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 20px; left: 0; right: 0;
    border-radius: 45px;
    background-color: $white;
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
            color: $black;
            font-weight: bold;

            &:hover {
                color: $orange;
                // text-shadow: 0px 0px 3px $black;
            }
        }
    }
}
</style>