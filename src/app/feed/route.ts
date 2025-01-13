import { toBytes } from "fast-base64";

export const dynamic = "force-dynamic";

export async function GET() {
    const feedResponse = await fetch("https://api.github.com/repos/freesmteam/news/contents/feed.md");

    const news = await feedResponse.text();

    const response = new Response(news, {
        status: 200,
        statusText: "ok",
    });

    let bytes = await toBytes('SGVsbG8sIHdvcmxkIQ==');

    response.headers.append("content-type", "text/xml");

    return response;
}