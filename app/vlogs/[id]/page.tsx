/*
動的ルーティング
*/
// URLのidによって内容が変わるページを作成する
// フォルダ名を[]で囲みその中にpage.tsxを作成
// フォルダ名が[id]の場合、パラメーターは{id:value}のオブジェクトを受け取る
// そのため、パラメーターの型を{id:string}として受け取る

export default function BlogPage({params}:{params:{id:string}}) {
    return <h1>Blog ID: {params.id}</h1>;
}