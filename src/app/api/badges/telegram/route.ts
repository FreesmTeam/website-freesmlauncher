export async function GET(): Promise<Response> {
    const supportUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN!}/getChatMembersCount?chat_id=@freesmsupport`;
    const newsUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN!}/getChatMembersCount?chat_id=@freesmteam`;

    let results;

    try {
        const supportData = await fetch(supportUrl, {
            next: {
                revalidate: 3600,
            },
        });
        const newsData = await fetch(newsUrl, {
            next: {
                revalidate: 3600,
            },
        });
        const supportBody = await supportData.json();
        const newsBody = await newsData.json();

        results = {
            support: supportBody?.result,
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
