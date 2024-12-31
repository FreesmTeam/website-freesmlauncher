"use client";

import Launcher from "@/components/Launcher/Launcher";
import Link from "next/link";
import {DOWNLOADS_LINK, GITHUB_LINK} from "@/configs/constants";
import {useTranslations} from "next-intl";

export default function Hero() {
    const translate = useTranslations('Translations');
    const platform = navigator.platform.toLowerCase();
    let displayPlatform;

    switch (true) {
        case platform.includes('mac'):
            displayPlatform = 'macOS';
            break;
        case platform.includes('win'):
            displayPlatform = 'Windows';
            break
        case platform.includes('linux'):
            displayPlatform = 'Linux';
            break;
        default:
            displayPlatform = 'Windows'
            break;
    }

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                {translate('hero.title')}{' '}
                <span className="text-[#cba6f7]">
                    {displayPlatform}
                </span>
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                {translate('hero.description')}
            </p>
            <div className="flex gap-2 justify-center">
                <Link href={DOWNLOADS_LINK} className="bg-[#cba6f7] py-2 px-4 rounded-md font-bold text-[18px] text-black transition hover:bg-[#8839ef] hover:text-white">
                    {translate('hero.download-now')}
                </Link>
                <Link target="_blank" href={GITHUB_LINK} className="transition border-white border-[1px] bg-transparent py-2 px-4 rounded-md font-bold text-[18px] text-white hover:text-[#cba6f7] hover:border-[#cba6f7]">
                    Github
                </Link>
            </div>
            <Launcher />
        </div>
    )
}