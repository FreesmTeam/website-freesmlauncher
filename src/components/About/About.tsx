"use client";

import Link from "next/link";
import community from '@/configs/community.json';
import deletedAvatar from '../../../public/deleted_avatar.webp';
import { useContext } from "react";
import { DictionariesContext } from "@/utils/Providers/DictionariesProvider";
import ConfiguredImage from "@/components/ConfiguredImage/ConfiguredImage";

export default function About() {
    const { dictionaries } = useContext(DictionariesContext);

    const locale = dictionaries?.Info?.locale;
    const translations = dictionaries?.Translations;
    const translationsAbout = translations?.about;

    const maintainers = community.maintainers;
    const contributors = community.contributors;

    return (
        <div className="flex flex-col gap-8 pt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl text-white sm:text-7xl">
                {translationsAbout?.title}
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translationsAbout?.description}
            </p>
            <div
                className="flex flex-col items-center gap-8 rounded-md border-[1px] border-mantle w-full bg-crust p-8"
            >
                <p className="text-xl sm:text-3xl text-center font-semibold text-white">
                    {translationsAbout?.maintainers}
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
                                    <ConfiguredImage
                                        className="transition rounded-full w-16 h-16 sm:w-24 sm:h-24"
                                        width={96}
                                        height={96}
                                        src={maintainer.avatar}
                                        alt={`${maintainer.name}'s avatar`}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-mauve font-semibold text-[18px] sm:text-[24px]">
                                            {maintainer.name}
                                        </p>
                                        <p className="text-justify text-white text-[16px] sm:text-[22px] pr-2">
                                            {description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
                <p className="text-xl sm:text-3xl text-center font-semibold text-white">
                    {translationsAbout?.contributors}
                </p>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                    {
                        contributors.map((contributor) => {
                            return (
                                <Link
                                    target="_blank"
                                    className="w-16 sm:w-24 flex flex-col items-center justify-center gap-2 rounded-full transition hover:grayscale hover:scale-105"
                                    key={contributor.name}
                                    href={contributor.link}
                                >
                                    <ConfiguredImage
                                        className="transition rounded-full w-12 h-12 sm:w-16 sm:h-16"
                                        width={64}
                                        height={64}
                                        src={contributor.avatar ?? deletedAvatar}
                                        alt={`${contributor.name}'s avatar`}
                                    />
                                    <p className="text-[14px] sm:text-[16px] max-w-16 sm:max-w-24 text-center text-wrap break-words text-gray-300">
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
