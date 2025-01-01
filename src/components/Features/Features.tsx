'use client';

import {useTranslations} from "next-intl";
import {Icon} from "@iconify/react";

export default function Features() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex gap-8 justify-between items-start mt-12 max-w-[960px] px-4 mx-auto">
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center text-white gap-2">
                    <Icon height={32} icon="fluent:people-community-16-regular"/>
                    <p className="text-justify text-xl sm:text-3xl text-white font-semibold">
                        {translate('features.first-title')}
                    </p>
                </div>
                <p className="text-justify text-xl text-gray-300">
                    {translate('features.first-description')}
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center text-white gap-2">
                    <Icon height={32} icon="fluent:lock-open-16-regular"/>
                    <p className="text-justify text-xl sm:text-3xl text-white font-semibold">
                        {translate('features.second-title')}
                    </p>
                </div>
                <p className="text-justify text-xl text-gray-300">
                    {translate('features.second-description')}
                </p>
            </div>
        </div>
    );
}