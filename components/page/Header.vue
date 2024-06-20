<template>
    <div class="header">
        <div class="header_bar">
            <h1>udcxx.</h1>
            <ul>
                <li><TextLink href="https://app.udcxx.me/" type="black">ツール・API</TextLink></li>
                <li><TextLink href="https://blog.udcxx.me/" type="black">ブログ</TextLink></li>
                <li><TextLink href="sample" type="black">サンプル</TextLink></li>
            </ul>
        </div><!-- /header_bar -->
    </div><!-- /header -->
</template>

<style scoped lang="scss">
.header {
    padding-top: 90px;
}
.header_bar {
    width: 98%; max-width: $wrap-max; height: 50px;
    margin: 0 auto;
    padding-left: 2em;
    color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 20px; left: 0; right: 0; z-index: 5;
    // border: 1px solid rgba(255, 255, 255, 0.25);
    box-sizing: border-box;
    border-radius: 45px;
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    background-color: $white;
}

h1 {
    @include fontsize(30);
    font-weight: 500; font-family: 'Ubuntu';
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