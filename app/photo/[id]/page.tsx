export default async function PhotoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    return <h1>Photo Page ID: {id}</h1>;
}
