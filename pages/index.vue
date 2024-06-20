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

.fv {
    height: 90vh;
    margin-bottom: 5rem;
    position: relative;
    
    h2 {
        margin: 0 auto;
        position: absolute;
        top: 50%; left: 0; right: 0;
        @include fontsize(20);
    }
}

.about {
    margin-bottom: 5rem;

    .bord {
        width: 90%;
        margin: 0 auto;
    }
}

.creative {
    margin-bottom: 5rem;
}

.history {
    margin-bottom: 5rem;
}

</style>