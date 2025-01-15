'use client';

import {useTranslations} from "next-intl";
import {Icon} from "@iconify/react";
import {FEATURES_SECTIONS} from "@/configs/constants";

export default function Features() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex flex-col flex-wrap lg:flex-row gap-8 justify-between items-start mt-12 max-w-[960px] px-8 mx-auto">
            {
                FEATURES_SECTIONS.map((feature) => {
                    return (
                        <div
                            key={feature.title}
                            className="shrink-0 lg:max-w-[432px] flex flex-col gap-2"
                        >
                            <div className="flex items-center text-white gap-2">
                                <Icon
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                    height={32}
                                    icon={feature.icon}
                                />
                                <p className="text-justify text-xl sm:text-3xl text-white font-semibold">
                                    {translate(feature.title)}
                                </p>
                            </div>
                            <p className="text-justify text-[16px] sm:text-xl text-gray-300">
                                {translate(feature.description)}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
}