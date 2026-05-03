import { cacheTag, revalidatePath, revalidateTag } from 'next/cache';

async function getHeavyData() {
    'use cache';
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return '重いデータの取得完了';
}

export default async function useCache() {
    const data = await getHeavyData();

    return (
        <>
            <h1>{data}</h1>
        </>
    );
}
