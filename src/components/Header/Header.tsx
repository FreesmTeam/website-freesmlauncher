"use client";

import Image from "next/image";
import freesmLogo from '../../../public/freesm-launcher-logo.webp';
import Link from "next/link";
import {Icon} from "@iconify/react";
import {GITHUB_LINK} from "@/configs/constants";
import {useTranslations} from "next-intl";
import {usePathname} from "@/i18n/routing";

export default function Header() {
    const info = useTranslations('Info');
    const locale = info('locale');
    const pathname = usePathname();
    let redirectLocale;
    let currentLanguageFlag;

    switch (locale) {
        case "ru":
            redirectLocale = "en";
            currentLanguageFlag = "🇷🇺";
            break;
        case "en":
        default:
            redirectLocale = "ru";
            currentLanguageFlag = "🇺🇸";
            break;
    }

    return (
        <header className="p-4 mx-auto max-w-[1280px] w-full">
            <div className="flex justify-between items-center h-12 w-full">
                <Link href="/">
                    <Image height={48} src={freesmLogo} alt="FreesmLauncher logo" />
                </Link>
                <div className="flex gap-4">
                    <Link
                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                        href="/download"
                    >
                        Download
                    </Link>
                    <Link
                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                        href="/about"
                    >
                        About
                    </Link>
                    <div className="w-[2px] bg-[#cba6f7]" />
                    <Link
                        className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244]"
                        target="_blank"
                        href={GITHUB_LINK}
                    >
                        <Icon
                            className="text-white"
                            height={24}
                            icon="mdi:github"
                        />
                    </Link>
                    <Link
                        className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244]"
                        href={`/${redirectLocale}${pathname}`}
                    >
                        <p className="text-white">
                            {currentLanguageFlag}
                        </p>
                    </Link>
                </div>
            </div>
        </header>
    );
}