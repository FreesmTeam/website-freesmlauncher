import nextBase64 from 'next-base64';
import { appcastBeforeContent, appcastAfterContent } from '@/configs/prismNews.json';

export const dynamic = "force-dynamic";

// sorry i don't wanna use another library to generate fucking feed.xml file for launcher
// and i really hate .xml files so i didn't bother with the quality of my code
export async function GET() {
    const githubContents = await fetch("https://api.github.com/repos/freesmteam/news/contents/feed.md", {
        next: {
            // in seconds. 60 * 60 = 3600 seconds = 1 hour
            revalidate: 60 * 60,
        }
    });

    if (!githubContents.ok) {
        return new Response(
            appcastBeforeContent + `
                <item>
                    <title>If you see this... how?</title>
                    <link>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429</link>
                    <sparkle:version>error-0.0.0</sparkle:version>
                    <description>
                        Sorry, but GitHub ratelimited our requests (or something else happened). Please try again in an hour. And yes, we have a cache
                    </description>
                    <pubDate>${(new Date()).toISOString()}</pubDate>
                    <sparkle:minimumSystemVersion>11.0.0</sparkle:minimumSystemVersion>
                </item>
            ` + appcastAfterContent,
            {
                status: 429,
            }
        );
    }

    const news = await githubContents.text();
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
            content: properties.slice(3).join('\n ').replaceAll('<', "&lt;"),
        };
    });

    const xmlNews = decodedNewsProperties.map((entry) => {
        return (
            `
                <item>
                    <title>${entry.title}</title>
                    <link>${entry.link}</link>
                    <pubDate>${entry.date}</pubDate>
                    <description>
                        ${entry.content}
                    </description>
                </item>
            `
        );
    }).join('');

    const response = new Response(
        appcastBeforeContent + xmlNews + appcastAfterContent,
        {
            status: 200,
            statusText: "ok",
        }
    );

    response.headers.append("content-type", "text/xml");

    return response;
}
