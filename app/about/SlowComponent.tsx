export default async function SlowComponent() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });

    return <div>重いコンポーネント</div>;
}
