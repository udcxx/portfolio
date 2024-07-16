<template>
    <section class="fv wrap" id="fv">
        <h2>udcxx.</h2>
    </section><!-- /fv -->

    <ToppageSection title-ja="udcxxについて" title-en="about">
        <AtomsBord>
            <p>こんにちは👋 だいちゃん / udcxx です。<br>ポートフォリオをご覧いただきありがとうございます🙌</p>
            <p>小さい頃からパソコンが好きで、Web系の会社などを経て、現在はテクニカルサポートとして、ユーザー様の困りごとをいち早く解決できるように全力を注いでます💪</p>
            <p>Webへの興味も捨てられず、勉強がてら、このポートフォリオサイトもほぼ毎年作り変えています🎨<br>ほかにも、kintoneのカスタマイズやブックマークレットなど、業務をちょっと改善するコードを書いたり、Webツールを作って公開したりと、公私ともにインプット・アウトプットを繰り返して日々成長中！</p>
            <p>Web, JavaScript, kintone... に関することなら一度お声掛けください📣 なにかお役に立てるかもしれません。</p>
        </AtomsBord>
    </ToppageSection><!-- /about -->

    <ToppageSection title-ja="制作実績" titleEn="creative">
        <div class="items">
            <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" subtitle="AIでkintone活用をサポート！" eyecatch="./creative/recitone.png" :isBig="true">
                <p>AIを使ったWebツール「RECITONE」を開発しました。<br>RECITONEは、kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
            </CreativeCard>
            <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" eyecatch="">
                <p>kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
            </CreativeCard>
            <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" eyecatch="">
                <p>kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
            </CreativeCard>
        </div>
    </ToppageSection><!-- /creative -->

    <!-- <ToppageSection title-ja="読んだもの書いたもの" title-en="activity">
        <AtomsBord>
            <AtomsGetBlogArticles />
        </AtomsBord>
    </ToppageSection> -->

    <ToppageSection title-ja="これまでの経歴" title-en="history">
        <AtomsBord>
            <span>2021.09 ～</span>
            <p>テクサポ＠ITサポート企業</p>
            <p>クラウド製品のテクニカルサポート（電話/メール）を担当し、基本機能のサポートに加えて、APIに関するサポートも兼任。<br>業務効率化のため、ブックマークレットやkintoneカスタマイズの作成も行う。</p>
            <ul>
                <li>kintone</li>
                <li>API</li>
                <li>JavaScript</li>
                <li>サポート</li>
            </ul>
        </AtomsBord>
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

        p {
            margin-bottom: 1em;
        }
    }
}

.creative {
    .items {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .card {
        margin: 0 auto 2rem;

        &.big { width: 100%; }
        &.small { width: 48%; }
    }
}

.activity {
    .bord {
        width: 95%; max-width: 600px; 
        margin: 0 auto;
    }
}


</style>