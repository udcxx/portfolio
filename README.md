# portfolio

ポートフォリオサイト https://udcxx.me/ を管理するためのリポジトリです。

## 過去のポートフォリオ

過去のポートフォリオは以下のURLで公開しています。

* **2018年版：** https://udcxx.github.io/portfolio/old/2018/
* **2019年版：** https://udcxx.github.io/portfolio/old/2019/
* **2020年版：** https://udcxx.github.io/portfolio/old/2020/

## development

作業を開始するには下の手順に従います。

### Cloneする

```
git clone https://github.com/udcxx/portfolio.git
```

### 必要なnpmパッケージをインストールする

```
cd portfolio
npm install
```

### 作業環境を立ち上げる

```
npm run dev
```

上記コマンドで下記の機能が作動します。

* scssのコンパイラ
* 画像圧縮
* 表示確認用のブラウザ

### ソースコードを編集する

`src` ディレクトリ配下のソースコードを編集します

### commitする

関連するissueがあればその番号をコミットメッセージに含めて、commitします。

### pushする

リモートへpushします。

git pushコマンドを使用すると、同時にテストサーバーへのデプロイも行います。
