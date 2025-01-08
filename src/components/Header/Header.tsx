"use client";

import Image from "next/image";
import freesmLogo from '../../../public/freesm-launcher-logo.webp';
import Link from "next/link";
import {Icon} from "@iconify/react";
import {HEADER_ITEMS, HEADER_LINKS} from "@/configs/constants";
import {useTranslations} from "next-intl";
import {usePathname} from "@/i18n/routing";
import {HeaderItemType} from "@/types/HeaderItem.type";
import {HeaderExternalLinkType} from "@/types/HeaderExternalLink.type";

export default function Header() {
    const translate = useTranslations('Translations');
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
        <>
            <div className="w-full h-[80px] absolute top-0 bg-[#09090e]" />
            <header
                className="hidden sm:block z-[2000] sticky top-0 bg-[#09090e] lg:bg-[#09090ebb] lg:backdrop-blur border-b-[1px] border-[#181825] select-none p-4 w-full">
                <div className="mx-auto max-w-[1280px] flex justify-between items-center h-12 w-full">
                    <Link href={`/${locale}`}>
                        <Image height={48} src={freesmLogo} alt="FreesmLauncher logo"/>
                    </Link>
                    <div className="flex gap-4">
                        {
                            HEADER_ITEMS.map((item: HeaderItemType) => {
                                return (
                                    <Link
                                        key={item.name}
                                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                                        href={`/${locale}${item.link}`}
                                    >
                                        {translate(item.name)}
                                    </Link>
                                );
                            })
                        }
                        <div className="w-[2px] bg-[#cba6f7]"/>
                        {
                            HEADER_LINKS.map((link: HeaderExternalLinkType) => {
                                return (
                                    <Link
                                        key={link.link}
                                        className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244]"
                                        target="_blank"
                                        href={link.link}
                                    >
                                        <Icon
                                            className="text-white"
                                            height={link.height}
                                            icon={link.icon}
                                        />
                                    </Link>
                                );
                            })
                        }
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
        </>
    );
}