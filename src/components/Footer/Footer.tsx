"use client";

import Image from "next/image";
import websiteLogo from '../../../public/freesm-launcher-logo.webp';
import {FOOTER_LINKS, HOME_LINK} from "@/configs/constants";
import Link from "next/link";
import {useContext} from "react";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";

export default function Footer() {
    const { dictionaries } = useContext(DictionariesContext);

    const translations = dictionaries?.Translations;
    const translationsFooter = translations?.footer;

    return (
        <>
            <div className="-z-50 h-[300px] sm:h-[200px]" />
            <div className="flex justify-center bg-[#1b1b2a] h-[412px] sm:h-[232px] w-full px-8 pt-8 fixed bottom-0 pb-[112px] sm:pb-8 z-0">
                <div className="max-w-[1280px] w-full flex flex-col flex-nowrap sm:flex-row sm:justify-between gap-4">
                    <div className="select-none flex flex-col gap-2 items-center sm:items-start">
                        <Link href={HOME_LINK}>
                            <Image
                                height={40}
                                src={websiteLogo}
                                alt={"Freesm Launcher logo"}
                            />
                        </Link>
                        <p className="text-gray-400 text-[14px] sm:text-[16px]">
                            {translationsFooter?.["short-description"]}
                        </p>
                        <Link className="text-xs sm:text-sm text-zinc-600 transition hover:text-zinc-500" href="/session">
                            sign in?
                        </Link>
                    </div>
                    <div className="flex gap-4 flex-col sm:flex-row">
                        {
                            FOOTER_LINKS(dictionaries).map((item) => {
                                return (
                                    <div
                                        key={item.title}
                                        className="select-none px-4 flex flex-1 flex-col gap-2 items-center sm:items-start"
                                    >
                                        <p className="text-white font-semibold text-[14px] sm:text-[18px]">
                                            {item.title}
                                        </p>
                                        <div className="flex flex-row sm:flex-col gap-2 items-center sm:items-start">
                                            {
                                                item.links.map((link) => {
                                                    return (
                                                        <Link
                                                            href={link.link}
                                                            target="_blank"
                                                            key={link.name}
                                                            className="text-center sm:text-start leading-5 text-wrap text-gray-400 text-[12px] sm:text-[16px] underline-offset-[5px] hover:underline"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
