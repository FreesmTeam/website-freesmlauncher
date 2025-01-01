"use client";

import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import community from '@/configs/community.json';

export default function About() {
    const translate = useTranslations('Translations');
    const info = useTranslations('Info');
    const locale = info('locale');
    const maintainers = community.maintainers;

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                {translate('about.title')}
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                {translate('about.description')}
            </p>
            <div className="flex flex-col items-center gap-8 rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-8">
                <p className="text-3xl font-semibold text-white">
                    Maintainers
                </p>
                <div className="flex gap-4 justify-center">
                    {
                        maintainers.map((maintainer) => {
                            return (
                                <Link
                                    key={maintainer.name}
                                    target="_blank"
                                    href={maintainer.link}
                                    className="transition hover:grayscale rounded-md p-2 flex flex-1 gap-4 items-start"
                                >
                                    <Image
                                        className="rounded-full"
                                        width={96}
                                        height={96}
                                        src={maintainer.avatar}
                                        alt={'windstone avatar'}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[#cba6f7] font-semibold text-[24px]">
                                            {maintainer.name}
                                        </p>
                                        <p className="text-justify text-white">
                                            {maintainer.descriptionEn}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}