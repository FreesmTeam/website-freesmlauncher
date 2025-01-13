import nextBase64 from 'next-base64';
import prismNews from '@/configs/prismNews.json';

export const dynamic = "force-dynamic";

// sorry i don't wanna use another library to generate fucking feed.xml file for launcher
// and i really hate .xml files so i won't bother with the quality of my code
export async function GET() {

    const feedResponse = await fetch("https://api.github.com/repos/freesmteam/news/contents/feed.md");

    const news = await feedResponse.text();
    const parsedNews = JSON.parse(news);
    const decodedNews = nextBase64.decode(parsedNews?.content);
    const decodedNewsArr = decodedNews.split('---');
    const decodedNewsProperties = decodedNewsArr.map((entry) => {
        const properties = entry
            .split('\n')
            .filter((line) => line !== '');

        return {
            title: properties[0],
            link: properties[1],
            id: properties[1],
            date: properties[2],
            content: properties.slice(3).join('\n'),
        };
    });
console.log(decodedNewsProperties)
    const response = new Response(prismNews.beforeContent + prismNews.afterContent, {
        status: 200,
        statusText: "ok",
    });

    response.headers.append("content-type", "text/xml");

    return response;
}