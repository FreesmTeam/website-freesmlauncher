"use client";

import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import community from '@/configs/community.json';
import deletedAvatar from '../../../public/deleted_avatar.webp';

export default function About() {
    const translate = useTranslations('Translations');
    const info = useTranslations('Info');
    const locale = info('locale');
    const maintainers = community.maintainers;
    const contributors = community.contributors;

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl text-white sm:text-7xl">
                {translate('about.title')}
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translate('about.description')}
            </p>
            <div
                className="flex flex-col items-center gap-8 rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-8"
            >
                <p className="text-xl sm:text-3xl text-center font-semibold text-white">
                    {translate('about.maintainers')}
                </p>
                <div className="w-full flex flex-wrap gap-8 justify-center flex-col lg:flex-row">
                    {
                        maintainers.map((maintainer) => {
                            let description;

                            switch (locale) {
                                case 'ru':
                                    description = maintainer.descriptionRu;
                                    break;
                                case 'en':
                                default:
                                    description = maintainer.descriptionEn;
                                    break;
                            }

                            return (
                                <Link
                                    key={maintainer.name}
                                    target="_blank"
                                    href={maintainer.link}
                                    className="box-border min-w-[40%] transition hover:grayscale hover:scale-105 p-2 flex flex-1 gap-8 items-start"
                                >
                                    <Image
                                        className="rounded-full w-16 h-16 sm:w-24 sm:h-24"
                                        width={96}
                                        height={96}
                                        src={maintainer.avatar}
                                        alt={`${maintainer.name}'s avatar`}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[#cba6f7] font-semibold text-[18px] sm:text-[24px]">
                                            {maintainer.name}
                                        </p>
                                        <p className="text-justify text-white text-[12px] sm:text-[22px]">
                                            {description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
                <p className="text-xl sm:text-3xl text-center font-semibold text-white">
                    {translate('about.contributors')}
                </p>
                <div className="flex justify-center items-center gap-2">
                    {
                        contributors.map((contributor) => {
                            return (
                                <Link
                                    target="_blank"
                                    className="w-16 sm:w-24 flex flex-col items-center justify-center gap-2 rounded-full transition hover:grayscale hover:scale-105"
                                    key={contributor.name}
                                    href={contributor.link}
                                >
                                    <Image
                                        className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
                                        width={64}
                                        height={64}
                                        src={contributor.avatar ?? deletedAvatar}
                                        alt={`${contributor.name}'s avatar`}
                                    />
                                    <p className="text-xs sm:text-[16px] max-w-24 text-center text-wrap break-words text-gray-300">
                                        {contributor.name}
                                    </p>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}