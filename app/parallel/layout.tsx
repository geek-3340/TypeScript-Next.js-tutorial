/*
パラレルルート
*/

// 一つのルートの中に複数の独立したコンポーネントを配置することができる
// 使用方法：フォルダ名に@を付けて、その中にコンポーネントを配置する

// 先ずapp/parallel内にlayout.tsxを作成し、メインコンテンツを配置する
// 作成したparallel/layout.tsxにて、childrenとは別にteam, analyticsというパラメーターを追加する
// ※childrenは同ファイル内のparallel/page.tsxを描画する

// 次にコンポーネント用ファイル（スロットと呼ぶ）である/parallel/@team,@analyticsを作成し
// それぞれ直下ににpage.tsxを作成する

// これによりlayout.tsxはパラメーター名と、同フォルダ内のスロット名を検証し
// 一致するコンポーネントを非同期で配置する

// ※コンポーネントの配置はlayout.tsxではなく、page.tsxでも可能

export default function ParallelLayout({
    children,
    team, // @team/page.tsxを受け取る
    analytics, // @analytics/page.tsxを受け取る
}: {
    children: React.ReactNode;
    team: React.ReactNode;
    analytics: React.ReactNode;
}) {
    return (
        <div>
            <h1>Parallel Routes Page</h1>
            <div>{children}</div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{border:'1px solid red'}}>{team}</div>
                <div style={{border:'1px solid blue'}}>{analytics}</div>
            </div>
        </div>
    );
}
