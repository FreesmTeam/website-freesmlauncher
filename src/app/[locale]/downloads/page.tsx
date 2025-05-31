import Downloads from "@/components/Downloads/Downloads";
import {Metadata} from "next";
import {APP_NAME} from "@/configs/constants";
import {getDictionary} from "@/get-dictionary";
import {Locale} from "@/i18n-config";
import {headers} from "next/headers";
import {UAParser} from "ua-parser-js";
import getPlatformName from "@/utils/Helpers/getPlatformName";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
    const { locale } = await params;
    const { Translations: { pages: { downloads: { title, description } } } } = await getDictionary(locale);

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

export default async function Page() {
    const headersList = await headers();
    const { os } = UAParser(headersList.get("user-agent") ?? undefined);
    const platform = getPlatformName(os?.name?.toLowerCase() ?? "");

    return (
        <div className="text-white">
            <Downloads platform={platform} />
        </div>
    );
}
