<template>
    <section class="fv wrap" id="fv">
        <h2>udcxx.</h2>
    </section><!-- /fv -->

    <ToppageSection title-ja="udcxxについて" title-en="about" class="viewtoggle slide">
        <AtomsBord>
            <p>こんにちは👋 だいちゃん / udcxx です。<br>ポートフォリオをご覧いただきありがとうございます🙌</p>
            <p>小さい頃からパソコンが好きで、Web系の会社などを経て、現在はテクニカルサポートとして、ユーザー様の困りごとをいち早く解決できるように全力を注いでます💪</p>
            <p>Webへの興味も捨てられず、勉強がてら、このポートフォリオサイトもほぼ毎年作り変えています🎨<br>ほかにも、kintoneのカスタマイズやブックマークレットなど、業務をちょっと改善するコードを書いたり、Webツールを作って公開したりと、公私ともにインプット・アウトプットを繰り返して日々成長中！</p>
            <p>Web, JavaScript, kintone... に関することなら一度お声掛けください📣 なにかお役に立てるかもしれません。</p>
        </AtomsBord>
    </ToppageSection><!-- /about -->

    <ToppageSection title-ja="制作実績" titleEn="creative">
        <div class="items">
            <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" subtitle="AIでkintone活用をサポート！" eyecatch="./creative/recitone.png" :isBig="true" class="viewtoggle slide">
                <p>AIを使ったWebツール「RECITONE」を開発しました。<br>RECITONEは、kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
            </CreativeCard>
            <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" eyecatch="" class="viewtoggle slide">
                <p>kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
            </CreativeCard>
            <CreativeCard href="https://app.udcxx.me/recitone/" title="RECITONE" eyecatch="" class="viewtoggle slide">
                <p>kintoneで何を管理したいかを入力するだけで、kintoneアプリの設計図となる「レシピ」をAIが提案してくれるツールです。</p>
            </CreativeCard>
        </div>
        <p class="more">ほかにも、様々なツール・API・Webサイトの制作に<br class="forsp">携わらせていただきました。<br>そのほかの制作実績は、以下にまとめています。</p>
        <AtomsLink href="https://app.udcxx.me/" type="button" color="light-green" class="viewtoggle slide">公開中のツール</AtomsLink>
        <AtomsLink href="https://app.udcxx.me/" type="button" color="light-green" class="viewtoggle slide">Web制作実績</AtomsLink>
    </ToppageSection><!-- /creative -->

    <ToppageSection title-ja="読んだもの書いたもの" title-en="activity">
        <AtomsLink href="https://blog.udcxx.me/" type="button" color="light-green" class="viewtoggle slide">📚 ブログ</AtomsLink>
        <AtomsLink href="https://udcxx.hateblo.jp/" type="button" color="light-green" class="viewtoggle slide">📅 週報</AtomsLink>
        <AtomsLink href="https://note.com/udcxx" type="button" color="light-green" class="viewtoggle slide">📝 note</AtomsLink>
    </ToppageSection>

    <ToppageSection title-ja="これまでの経歴" title-en="history">
        <HistoryCard year="2021.09" title="テクサポ＠ITサポート企業" :tags="['kintone', 'API', 'JavaScript', 'IT全般']" class="viewtoggle slide">
            <p>クラウド製品のテクニカルサポート（電話/メール）を担当し、基本機能のサポートに加えて、APIに関するサポートも兼任。<br>業務効率化のため、ブックマークレットやkintoneカスタマイズの作成も行う。</p>
        </HistoryCard>
        <HistoryCard year="2019.03" title="コーダー＠LP制作会社" :tags="['HTML/CSS', 'JavaScript', 'PHP', 'Web', 'Git']" class="viewtoggle slide">
            <p>大手広告代理店グループの制作会社で、新規・更新あわせて 60件/月以上ものLPのコーディングを対応。<br>Node.jsやPHPなどを用いた業務効率化も行う。</p>
        </HistoryCard>
        <HistoryCard year="2018.04" title="社内情シス＠スタートアップ企業" :tags="['GAS', 'IT全般']" class="viewtoggle slide">
            <p>タイへの進出を支援する会社で、社内情シス兼バックオフィス業務を主に担当。<br>半年ほどタイに在住。現地視察のための調査補助なども行う。</p>
        </HistoryCard>
        <HistoryCard year="2014.04" title="大学＠情報系学部" :tags="['大学']" class="viewtoggle slide"></HistoryCard>
        <HistoryCard year="2011.08" title="FC2でブログを開設" :tags="['FC2', 'ブログ', 'HTML']" class="viewtoggle slide"></HistoryCard>
        <HistoryCard year="1996.01" title="沖縄に生まれる" :tags="['誕生']" class="viewtoggle slide"></HistoryCard>
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
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .card {
        margin: 0 auto 2rem;

        &.big { width: 100%; }
        &.small { 
            width: 48%; 

            @media (max-width: #{$break}) {
                width: 100%;
            }
        }
    }
    .more {
        margin: 2rem auto;
        font-size: 14px;
        line-height: 1.8em;
        color: $white;
        text-align: center;
    }
    .button {
        width: 50%; max-width: 300px;
        margin: 0 auto 2rem;
        @include fontsize(20);
    }
}

.activity {
    .bord {
        width: 95%; max-width: 600px; 
        margin: 0 auto;
    }

    .button {
        width: 50%; max-width: 300px;
        margin: 0 auto 2rem;
        @include fontsize(20);
    }
}

.history {
    .bord {
        width: 95%; 
        margin: 0 auto 2rem;
    }
}


</style>