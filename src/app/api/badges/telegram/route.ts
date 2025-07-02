export async function GET(): Promise<Response> {
    const offtopicUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN!}/getChatMembersCount?chat_id=-1002463432839`;
    const newsUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN!}/getChatMembersCount?chat_id=@freesmteam`;

    let results;

    try {
        const offtopicData = await fetch(offtopicUrl, {
            next: {
                revalidate: 3600,
            },
        });
        const newsData = await fetch(newsUrl, {
            next: {
                revalidate: 3600,
            },
        });
        const offtopicBody = await offtopicData.json();
        const newsBody = await newsData.json();

        results = {
            offtopic: offtopicBody?.result,
            news: newsBody?.result,
        };
    } catch (error) {
        console.log(error);

        return new Response(null, {
            status: 500,
        });
    }

    return Response.json(results);
}