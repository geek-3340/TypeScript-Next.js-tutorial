/*
ルートグループ
*/

// 複数のファイルを整理したいが、URLに影響を与えたくない場合に使用する
// 使用方法：フォルダ名を()で囲む

// 例：app/(admin)/dashboard/page.tsx
// この場合、URLはhttp://app/dashboardとなり、adminというファイル名はURLに含まれない

export default function Dashboard() {
    return <h1>Admin Dashboard</h1>;
}
