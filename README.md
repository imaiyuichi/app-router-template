# lig-nextjs-sharp

## フロントエンド使用技術

- Next.js (Using Pages Router / SSG & CSR)
- CSS Modules
- TypeScript

## CMS

- WordPress（headless）

## ローカル開発環境構築手順

Node.js >=20.0.0

### env ファイルの作成

.env.sample に下記の値を登録してください。`NEXT_PUBLIC`の接頭辞がつく環境変数は CSR のための変数です。

- SERVICE_DOMAIN
- API_KEY
- NEXT_PUBLIC_SERVICE_DOMAIN
- NEXT_PUBLIC_API_KEY
- NEXT_PUBLIC_SITE_URL

.env.sample を複製して .env を作成してください。

### パッケージインストール

```bash
npm ci
```

### 起動

```bash
npm run dev
```

## フロントエンド コーディング規約

### スタイリングについて

CSS Modules を使用してスタイリングを行います。

- CSS Modules の特性上、モディファイアをクラス名として扱うのが面倒なため、data 属性を利用することを推奨します。(ex. data-color="hoge" etc...)
- コンポーネント名とCSS Modulesのファイル名を揃えてください。

### アクセシビリティ

- 外部サイトを開く場合は`rel="noopener noreferrer"`をつけて基本的には参照元リンク情報を渡さないでください。

```bash
<a href="https://liginc.co.jp/" target="_blank" rel="noopener noreferrer">
```

## Linter

Lint は`husky`を使用してプリコミット時に実行します。以下の vscode プラグインをインストールすると vscode 保存時にも Lint が実行されます。

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 確認したい内容

- use client
- 今回はcsrを使用するため極力小さなコンポーネント単位で"use client"を使用する
- "use client"を使用するとpreレンダリングされない
- そもそも書き方あってる？

- WordPressのrest api
  https://ja.wp-api.org/
