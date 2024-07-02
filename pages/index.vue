<template>
    <section class="fv wrap" id="fv">
        <h2>udcxx.</h2>
    </section><!-- /fv -->

    <ToppageSection title-ja="udcxxについて" title-en="about">
        <AtomsBord>こんにちは👋<br>ポートフォリオサイトをご覧いただき、ありがとうございます🙌</AtomsBord>
    </ToppageSection><!-- /about -->

    <ToppageSection title-ja="制作実績" titleEn="creative">
        <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" subtitle="AIでkintone活用をサポート！" eyecatch="/creative/recitone.png" :isBig="true">
            <p>AIを使ったWebツール「RECITONE」を開発しました。<br>RECITONEは、kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
        </CreativeCard>
        <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" eyecatch="">
            <p>kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
        </CreativeCard>

    </ToppageSection><!-- /creative -->

    <ToppageSection title-ja="読んだもの書いたもの" title-en="activity">
        <AtomsBord>
            <AtomsGetBlogArticles />
        </AtomsBord>
    </ToppageSection>

    <ToppageSection title-ja="これまでの経歴" title-en="history">

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
        color: $light-gray;
        @include fontsize(60); font-weight: 500; font-family: $font-logo;
    }
}

.about {
    .bord {
        width: 95%;
        margin: 0 auto;
    }
}

.creative {
    .card {
        width: 95%;
        margin: 0 auto 2rem;
    }
}

.activity {
    .bord {
        width: 95%; max-width: 600px; 
        margin: 0 auto;
    }
}


</style>