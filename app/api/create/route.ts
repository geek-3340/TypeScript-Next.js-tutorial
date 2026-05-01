import { NextResponse } from 'next/server';

// 関数名をHTTPメソッド名とし、引数にリクエストデータを受けとる
export async function POST(request: Request) {
    const data = await request.json();

    // 以下のログはサーバー側で実行されるため、ブラウザのコンソールではなくターミナルで動作確認
    console.log('API Routesで受け取りました', data.name);

    return NextResponse.json({ message: '成功しました' });
}
