import {Metadata} from "next";
import {APP_NAME} from "@/configs/constants";
import SuccessfulLogin from "@/components/SuccessfulLogin/SuccessfulLogin";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionary";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
    const { locale } = await params;
    const { Translations: { pages: { "successful-login": { title, description } } } } = await getDictionary(locale);

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
            <SuccessfulLogin />
        </div>
    );
}
