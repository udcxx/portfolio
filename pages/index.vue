<template>
    <section class="fv wrap" id="fv">
        <h2>udcxx.</h2>
    </section><!-- /fv -->

    <ToppageSection titleJa="udcxxについて" titleEn="about">
        <AtomsBord>こんにちは👋<br>ポートフォリオサイトをご覧いただき、ありがとうございます🙌</AtomsBord>
    </ToppageSection><!-- /about -->

    <ToppageSection titleJa="制作実績" titleEn="creative">

    </ToppageSection><!-- /creative -->

    <ToppageSection titleJa="これまでの経歴" titleEn="history">

    </ToppageSection><!-- /history -->
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
    .bord {
        width: 90%;
        margin: 0 auto;
    }
}


</style>