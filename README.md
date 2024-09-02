# 課題１(アプリケーションエンジニアBootcamp)　

#### 課題１URL : https://app-kadai1.vercel.app

React、Typescriptでフロントエンドのみ実装しました。ビルドにはViteを使用しています。
データベースへの保存等のバックエンド処理を実装していないため、ブラウザを更新すれば投稿データ等は消失します。テスト用にすでにいくつか求人情報を入力しています。

- ## 求人検索画面
<img width="998" alt="image" src="https://github.com/user-attachments/assets/16265f81-99eb-4750-8536-5837c00926c6">


- ## 求人投稿画面
<img width="1001" alt="image" src="https://github.com/user-attachments/assets/97da9d89-31cb-4cc3-b042-ede950316672">


# 使用技術について
## nodeバージョン
- node v22.7.0
- npm v10.8.2

## フロント
- [React](https://reactjs.org/) 18.3.1
- [TypeScript](https://www.typescriptlang.org/) 5.5.3
- [Vite](https://vitejs.dev/) 5.4.1

## スタイル
- [Tailwind CSS](https://tailwindcss.com/) 3.4.10

## ホスティング
- [Vercel](https://vercel.com/)


# 機能一覧
- 求人の一覧表示
- 求人職種のカテゴリフィルタリング
- 年収額によるフィルタリング
- 新規求人情報の投稿
  - 右上の求人投稿ボタンを押すと、求人投稿ができる画面に遷移します。
  - 求人タイトル、カテゴリ、年収(万円)を入力し投稿ボタンを押せば、求人一覧画面に移動し投稿内容を確認できます。

# 動作手順
ローカルで動作させる場合、以下のように環境開発してください。

- Viteを使ってビルドしています。ReactとTypescriptを選択してください。
```
npm create vite@latest (アプリケーション名) //Reactプロジェクト作成
npm install //依存関係のインストール
```
以下のTailwind CSSの設定は、GitHubリポジトリのファイルにすでに設定済みですが記載しておきます。

- Tailwind CSSをプロジェクトに追加し、設定ファイルを生成する。
```
npm install tailwindcss
npx tailwindcss init -p //設定ファイルの生成。
```
- tailwind.config.jsファイルを開き、次のように設定します。
```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- src/index.cssにTailwindの基本スタイルをインポートします。
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
サーバーを起動し、表紙されたポートにアクセスしてください。
```
npm run dev
```
