'use client'; // client component宣言

import { SubmitEvent } from 'react';

function ApiRoutesUser() {
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');

        // 以下のようにファイルシステムベースのURLで呼び出す
        await fetch('/api/create', {
            cache:'force-cache', // Data Cache有効化
            method: 'POST', // コンポーネント関数名をメソッドとして設定する
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' />
            <button type='submit'>送信</button>
        </form>
    );
}

export default ApiRoutesUser;
