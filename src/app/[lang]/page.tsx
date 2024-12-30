export default async function Home({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    const currentLang = await params;

    return (
        <div className="text-white">
            {currentLang.lang}
        </div>
    );
}
