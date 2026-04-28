/*
動的ルーティング
*/

// URLが可変するページを作成できる
// 例：http://app/blog/3 http://app/blog/6など

// 動的ルーティングのpage.tsxでは、パラメーターに以下のようなオブジェクトを渡すことができる
// キー：[]で囲んだファイル名
// 値：パラメーターの値
// つまりファイルパスがapp/blogs/[id]であり、URLがhttp://app/blog/3ならば
// { id: "3" }というオブジェクトが渡される

export default async function BlogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    return <h1>Blog ID: {id}</h1>;
}
