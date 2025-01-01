"use client";

import {useTranslations} from "next-intl";

export default function About() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                {translate('about.title')}
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                {translate('about.description')}
            </p>
        </div>
    );
}