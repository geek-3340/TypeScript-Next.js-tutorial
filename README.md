# TypeScript + Next.jsの学習用プロジェクト

## プロジェクトの立ち上げ

```bash
npx create-next-app@latest .
```

## ディレクトリ構造

```bash
typescript_nextjs_tutorial/
├─ app/                 # アプリのメインフォルダ
│  ├─ globals.css
│  ├─ layout.tsx        # 全ページ共通のレイアウトファイル
│  ├─ page.module.css
│  └─ page.tsx          # ルートURLで描画されるページ
├─ public/              # 静的ファイルのフォルダ
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ .gitignore
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts       # Next.jsの設定ファイル
├─ package-lock.json
├─ package.json
├─ README.md
└─ tsconfig.json        # TypeScriptの設定ファイル
```

## Next.jsのルーティングについて

### 基本的なルーティング（ ファイルシステムベースのルーティング ）

Next.jsでは`/app`直下にページ用のフォルダを作成し、その中に`page.tsx`を作成することで、フォルダ名からURLを作成したページとなる。

例：以下の場合`/app/about/page.tsx`をサーバーにリクエストする際、Next.jsがファイル構造を見て自動で`http://localhost:3000/about`というURLを生成してくれる。

```bash
app/
├─ about/
│     └─ page.tsx   # このファイルのURLはhttp://localhost:3000/aboutとなる
├─ globals.css
├─ layout.tsx
├─ page.module.css
└─ page.tsx
```

例２：ネストも可能

```bash
app/
├─ about/
│  │  └─ page.tsx
│  └─contact/
|        └─ page.tsx # このファイルのURLはhttp://localhost:3000/about/contactとなる
├─ globals.css
├─ layout.tsx
├─ page.module.css
```

### [動的ルーティング](./app/blogs/[id]/page.tsx)

### [ルートグループ](<./app/(admin)/dashboard/page.tsx>)

### [パラレルルート](./app/parallel/layout.tsx)

### [インターセプティングルート](./app/feed/page.tsx)

## サーバーコンポーネントとは

### 基本的な考え方

一言でいうとJavaScriptをサーバー側で実行し、完成したHTMLをクライアントに返すという概念

### Reactとの違い

Reactでは、サーバーにトランスパイルされたJSを格納し、ブラウザがこれを受け取って実行し
HTMLを生成している。
Next.jsではこのJS実行をサーバーで事前に行い、ブラウザは完成したHTMLを受け取る。

|          | React                       | Next.js         |
| -------- | --------------------------- | --------------- |
| サーバー | HTML,JavaScriptが置いてある | JS実行,HTML生成 |
| ブラウザ | 受け取ってJS実行,HTML生成   | HTMLを受け取る  |

### メリット

- パワーのあるサーバー側でJSを事前に実行するため、処理が速い
- コンテンツが完成した状態で受け取るので、SEOに強い

### デメリット

- イベントリスナー、windowメソッドなどのブラウザで動く処理が出来ない

> このデメリットを解決するには次のクライアントコンポーネントを参照

### [サーバーコンポーネントを使ったデータ取得の例](./app/page.tsx)

## クライアントコンポーネントとは

### 基本的な考え方

コンテンツの初期表示に関係するロジックはサーバー側で実行
インタラクティブな動作のためのロジックはブラウザで実行される
この二つを紐づける（ハイドレーション）

<table>
  <thead>
    <tr>
      <th></th>
      <th>HTMLの初期化ロジック</th>
      <th>インタラクティブな動作用ロジック</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>サーバー</td>
      <td>JS実行,HTML生成</td>
      <td>JSのまま保持</td>
    </tr>
    <tr>
      <td>ブラウザ</td>
      <td colspan="2">ハイドレーションされたHTML,JSを受け取る</td>
    </tr>
  </tbody>
</table>

### 使用方法
ファイルの最上部に`'use client'`と書くだけで、そのコンポーネントはクライアントコンポーネントとなる

## Loading UI と ストリーミング
### Loading UI
Next.jsでは`loading.tsx`という予約ファイルを作成することで
同階層の`page.tsx`を読み込んでいる間の、ローディング画面を
簡単に実装できる

### ストリーミング
ストリーミングとは読み込みが完了したデータから随時描画していく概念で
Next.jsでは`<Suspense>`タグを用いて実装できる

```tsx
import { Suspense } from 'react';
import SlowComponent from './SlowComponent';

export default function About() {
    return (
        <>
            <h1>メインコンテンツ（すぐに表示）</h1>
            {/* 以下：Suspenseで囲まれているコンテンツが読み込まれるまで、fallbackのコンテンツを描画する */}
            <Suspense fallback={<h1>コンポーネントを読み込み中...</h1>}>
                <SlowComponent /> {/* ← 読み込みに３秒かかるよう設定してる */}
            </Suspense>
        </>
    );
}
```

## API Routes と Server Action

### API Routes
ファイルシステムベースのルーティングでAPIのエンドポイントを作成できる機能

先ず`/app`配下に`/api/create/route.ts`を作成します。
>`/api`や`/create`は慣習的に命名してるが、`route.ts`は予約ファイルのため、このファイル名であることが必須

ファイル内のコンポーネント関数名をメソッド名(UPPER CASE)とし、引数にリクエストを受け取り処理を記述

>参照：[route.ts](./app/api/create/route.ts)

これでAPIが完成し、client componentで呼び出す場合は以下のファイルのようになる

>参照：[クライアントコンポーネント](./app/api-routes-user/page.tsx)

### Sever Action
同じコンポーネント内でバックエンドの処理と呼び出しイベント等の両方を実装できる機能

