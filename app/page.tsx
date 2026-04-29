type Post = {
    id: number;
    title: string;
};

// サーバーコンポーネントではページ初期化関数をasyncにできる
export default async function Home() {
    // Next.jsでのfetch()は取得したデータをサーバーのキャシュに保存するため、処理が速い
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    /*
    Reactだと、上記の処理は以下のように書かなくては最初のデータが描画されない
        const [posts, setPosts] = useState();
        useEffect(() => {
            const fetchPosts = async () => {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/posts',
                );
                const data = await res.json();
                setPosts(data);
            };
            fetchPosts();
        }, []);
    */

    return (
        <div>
            <h1>記事一覧</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
