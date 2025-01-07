import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {APP_NAME} from "@/configs/constants";
import SuccessfulLogin from "@/components/SuccessfulLogin/SuccessfulLogin";

export async function generateMetadata(): Promise<Metadata> {
    const translate = await getTranslations('Translations');

    const title = translate('pages.successful-login.title');
    const description = translate('pages.successful-login.description');

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