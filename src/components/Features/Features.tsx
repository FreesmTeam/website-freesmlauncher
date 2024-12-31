'use client';

import {useTranslations} from "next-intl";

export default function Features() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex gap-4 justify-between items-start mt-12 max-w-[960px] px-4 mx-auto">
            <div className="flex-1 flex flex-col gap-2">
                <p className="text-3xl text-white font-semibold">
                    {translate('features.first-title')}
                </p>
                <p className="text-xl text-gray-300">
                    {translate('features.first-description')}
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <p className="text-3xl text-white font-semibold">
                    {translate('features.second-title')}
                </p>
                <p className="text-xl text-gray-300">
                    {translate('features.second-description')}
                </p>
            </div>
        </div>
    );
}