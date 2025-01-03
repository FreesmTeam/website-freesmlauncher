import About from "@/components/About/About";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {APP_NAME} from "@/configs/constants";

export async function generateMetadata(): Promise<Metadata> {
    const translate = await getTranslations('Translations');

    const title = translate('pages.about.title');
    const description = translate('pages.about.description');

    return {
        title: title,
        description: description,
        openGraph: {
            siteName: APP_NAME,
            type: "website",
            title: title,
            description: description,
        }
    };
}

export default function Page() {
    return (
        <div className="text-white">
            <About />
        </div>
    );
}