"use client";

import Launcher from "@/components/Launcher/Launcher";
import Link from "next/link";
import {DOWNLOADS_LINK, GITHUB_LINK} from "@/configs/constants";
import {Icon} from "@iconify/react";
import {useContext} from "react";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";
import getPlatformName from "@/utils/Helpers/getPlatformName";

export default function Hero({
    platform,
}: {
    platform: ReturnType<typeof getPlatformName>;
}) {
    const { dictionaries } = useContext(DictionariesContext);

    const translations = dictionaries?.Translations;
    const locale = dictionaries?.Info?.locale

    let icon;

    switch (platform.toLowerCase()) {
        case 'windows':
            icon = (
                <Icon height={24} icon='mdi:microsoft-windows' />
            );
            break;
        case 'linux':
            icon = (
                <Icon height={24} icon='mdi:linux' />
            );
            break;
        case 'macos':
            icon = (
                <Icon height={24} icon='mdi:apple' />
            );
            break;
        default:
            icon = (
                <Icon height={24} icon="mdi:devices" />
            );
            break;
    }

    return (
        <div className="flex flex-col gap-8 pt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl text-white sm:text-7xl">
                {translations?.hero?.title}{' '}
                <span className="text-mauve">
                    {platform}
                </span>
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translations?.hero?.description}
            </p>
            <div className="flex gap-2 justify-center">
                <Link href={`/${locale}${DOWNLOADS_LINK}`} className="text-center text-balance bg-mauve flex gap-2 items-center py-2 px-4 rounded-md font-bold text-[18px] text-black transition hover:bg-[#8839ef] hover:text-white">
                    {icon}
                    {translations?.hero?.["download-now"]}
                </Link>
                <Link target="_blank" href={GITHUB_LINK} className="text-center text-balance transition border-white border-[1px] bg-transparent py-2 px-4 rounded-md font-bold text-[18px] text-white hover:text-mauve hover:border-[#cba6f7]">
                    Github
                </Link>
            </div>
            <Launcher platform={platform} />
        </div>
    )
}
