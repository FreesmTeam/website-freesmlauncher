"use client";

import { DOWNLOADS_OPTIONS } from "@/configs/constants";
import getPlatformName from "@/utils/Helpers/getPlatformName";
import { useTranslations } from "next-intl";
import {useEffect, useState} from "react";
import ReleaseLinks from "./ReleaseLinks/ReleaseLinks";
import {UAParser} from "ua-parser-js";

export default function Downloads() {
    const translate = useTranslations('Translations');

    const [platform, setPlatform] = useState<string | null>(null);
    const displayPlatform = getPlatformName(platform ?? "");

    const [selectedPlatform, setSelectedPlatform] = useState(displayPlatform);

    useEffect(() => {
        setPlatform(UAParser().os.name?.toLowerCase() ?? "");
    }, []);

    useEffect(() => {
        if (platform !== null) {
            setSelectedPlatform(displayPlatform)
        }
    }, [platform]);

    return (
        <div className="flex flex-col gap-8 pt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl sm:text-7xl text-white">
                {translate('downloads.title')}
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translate('downloads.description')}
            </p>
            <div className="flex flex-wrap gap-2 rounded-md border-[1px] border-mantle w-full bg-crust p-2">
                {
                    DOWNLOADS_OPTIONS.map((option) => {
                        if (option === selectedPlatform) {
                            return (
                                <button
                                    onClick={() => setSelectedPlatform(option)}
                                    className="transition px-2 py-1 flex-1 bg-[#1D1A28] flex justify-center text-xl sm:text-2xl items-center rounded-md"
                                    key={option}
                                >
                                    {option}
                                </button>
                            );
                        }
                        
                        return (
                            <button 
                                onClick={() => setSelectedPlatform(option)}
                                className="transition flex justify-center items-center px-2 py-1 text-xl sm:text-2xl flex-1 rounded-md"
                                key={option}
                            >
                                {option}
                            </button>
                        );
                    })
                }
            </div>
            <div className="rounded-md border-[1px] border-mantle w-full bg-crust p-2 min-h-[360px]">
                <div className="flex flex-col gap-4 p-8 items-center">
                    <p className="text-center text-2xl sm:text-3xl font-semibold text-white">
                        {translate('downloads.packages-for')}{' '}
                        <span className="text-mauve">
                            {selectedPlatform}
                        </span>
                    </p>
                    <ReleaseLinks platform={selectedPlatform} />
                </div>
            </div>
        </div>
    );
}