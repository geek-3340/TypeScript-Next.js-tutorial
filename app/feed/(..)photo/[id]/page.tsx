export default async function InterceptedPhotoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    return (
        <div>
            <h1>Intercepted Photo Page ID: {id}</h1>
            <p>これはインターセプトされたページです</p>
        </div>
    );
}
