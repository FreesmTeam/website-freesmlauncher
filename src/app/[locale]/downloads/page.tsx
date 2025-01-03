import Downloads from "@/components/Downloads/Downloads";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {APP_NAME} from "@/configs/constants";

export async function generateMetadata(): Promise<Metadata> {
    const translate = await getTranslations('Translations');

    const title = translate('pages.downloads.title');
    const description = translate('pages.downloads.description');

    return {
        title: title,
        description: description,
        openGraph: {
            images: "/banner.webp",
            siteName: APP_NAME,
            type: "website",
            title: title,
            description: description,
        },
        twitter: {
            card: "summary",
            title: title,
            description: description,
        },
    };
}

export default function Page() {
    return (
        <div className="text-white">
            <Downloads />
        </div>
    );
}