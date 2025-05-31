import {getDictionary} from "@/get-dictionary";
import {DefaultLocale} from "@/configs/localization";
import Link from "next/link";
import {Locale} from "@/i18n-config";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const locale = (await params)?.locale ?? DefaultLocale;
    const { Translations: { pages: { "not-found": {
        title,
        description,
        "go-to-home": goToHome,
        subtitle,
    } } } } = await getDictionary(locale);

    return (
        <div className="flex text-balance text-center justify-center items-center h-[calc(100svh-106px)] w-full max-w-[900px] px-4 sm:px-6 mx-auto flex-col text-white gap-2">
            <p className="text-mauve text-6xl sm:text-9xl font-black pb-2 sm:pb-4">
                {title}
            </p>
            <p className="text-xl sm:text-3xl font-bold">
                {subtitle}
            </p>
            <p className="text-sm sm:text-lg">
                {description}
            </p>
            <Link
                className="text-center text-balance bg-mauve flex gap-2 items-center py-1 px-2 sm:py-2 sm:px-4 rounded-md font-bold text-[12px] sm:text-[18px] text-black transition hover:bg-[#8839ef] hover:text-white mt-2"
                href="/"
            >
                {goToHome.toUpperCase()}
            </Link>
        </div>
    );
}
