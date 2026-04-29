import { Suspense } from 'react';
import SlowComponent from './SlowComponent';

export default function About() {
    return (
        <>
            <h1>メインコンテンツ（すぐに表示）</h1>

            {/* <Suspense fallback={<h1>重いコンポーネントを読み込み中...</h1>}> */}
            <SlowComponent />
            {/* </Suspense> */}
        </>
    );
}
