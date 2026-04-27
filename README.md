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


## ファイルシステムベースのルーティング
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
└─ page.tsx
```