# SCSS ディレクトリ構成

## 基本方針

基本方針は以下のページを参考に、 `COMPONENTS` , `ELEMENTS` , `VARIANT` を用いて管理する（詳細は後述）。

* [コンポーネント中心のCSS設計 - Qiita](https://qiita.com/y___k/items/0d04aa58b36436137852)

スタイルは class にて制御することを基本とし、 `base` ディレクトリ配下に配置される scss ファイル以外では、HTMLタグに対してスタイルを適用しない。

また、HTMLタグやコンポーネントに対しては margin や padding など、周りの要素に影響を与えるプロパティを極力指定しないようにする。


### COMPONENTS

* すべての UI パーツをこのコンポーネントで管理する
* 2ワード程度で命名する
* ワードは **アンダースコア** `_` で繋ぐ
  * 例： sample_name
* コンポーネントごとにscssファイルを分けて管理する

### ELEMENTS

* コンポーネントの子要素
* 1ワード程度で命名する
* どうしても2ワード以上で指定した場合、ワードは **アンダースコア** `_` で繋ぐ
* コンポーネントとエレメントは **ハイフン 2つ** `--` で繋ぐ
  * 例： sample_name--element
* 親コンポーネントと同じscssファイルに含める

### VARIANT

* コンポーネントやエレメントの変種・バージョン違い。
* 複数のヴァリアントを併用して良い。
* 必ずコンポーネントやエレメントとセットで使用する。単独で使用しない。
* クラス名の先頭は **ハイフン 1つ** `-` とする。

## scssファイルの記載・利用例

_sampleName.scss

```
.sample_name {
    ...
    &--element {
        ...
    }
    &--box {
        ...
        &.-large {
            ...
        }
    }
}
```

index.html

```
<div class="sample_name">
    <div class="sample_name--element">
        <div class="sample_name--box"></div>
        <div class="sample_name--box -large"></div>
    </div>
</div>
```

## ディレクトリ構成

```
css    
 ├─ base    
 │   ├─ _classes.scss    
 │   ├─ _fonts.scss    
 │   ├─ _reset.scss    
 │   └─ _tags.scss    
 ├─ components    
 │   ├─ pagename    
 │   │   ├─ _sampleComponents.scss    
 │   │   └─ _sampleComponents.scss    
 │   ├─ _commonComponents.scss    
 │   └─ _sampleName.scss    
 ├─ _function.scss    
 ├─ _vars.scss    
 └─ style.scss 
 ```   

* `css/base/_classes.scss` では、幅広く利用する class を定義する。
* `css/base/_fonts.scss` では、font-size や、line-height など、文字周りを定義する。HTMLタグに直接定義して良いこととする。
* `css/base/_reset.scss` では、ブラウザのスタイルシートを打ち消すためのスタイルを定義する。
* `css/base/_tags.scss` では、フォント周り以外のHTMLタグを直接定義する。
* コンポーネントは基本的に、`css/components/` 直下にscssファイルを配置する。ただし、明らかに特定のページ以外では使用しないコンポーネントの場合、ディレクトリを作成し、その中にまとめても良いこととする。
  * 例：お問い合わせページのフォームに関するコンポーネント、など
* `css/_vars.scss` では、各 scss ファイルで利用する変数を定義する。
* `css/_function_.scss` では、各 scss ファイルで利用する関数を定義する。
* `css/style.scss` では、1つの css ファイルに書き出せるように、各 scss ファイルを取り込む。なお、
