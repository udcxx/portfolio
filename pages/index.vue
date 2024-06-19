<template>
    <section class="fv wrap" id="fv">
        <h2>udcxx.</h2>
    </section><!-- /fv -->

    <section class="about wrap" id="about">
        <SectionTitle eng='about'>udcxxについて</SectionTitle>
        <Bord>こんにちは👋<br>ポートフォリオサイトをご覧いただき、ありがとうございます🙌</Bord>
    </section><!-- /about -->

    <section class="creative wrap" id="creative">
        <SectionTitle eng='creative'>制作実績</SectionTitle>
    </section><!-- /creative -->

    <section class="history wrap" id="history">
        <SectionTitle eng='history'>これまでの経歴</SectionTitle>
    </section>
</template>

<style lang="scss" scoped>

.wrap {
    width: 100%; max-width: 1080px;
    margin: 0 auto;
    padding: 20px 0;
}

.fv {
    width: 100%; height: 90vh;
    position: relative;
    
    h2 {
        margin: 0 auto;
        position: absolute;
        top: 50%; left: 0; right: 0;
        font-size: 40px;
    }

    &.wrap {
        padding: 0;
    }
}

</style>