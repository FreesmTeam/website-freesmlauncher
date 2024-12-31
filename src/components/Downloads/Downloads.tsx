"use client";

import { DOWNLOADS_OPTIONS } from "@/configs/constants";
import getLatestRelease from "@/utils/getLatestRelease";
import getPlatformName from "@/utils/getPlatformName";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Downloads() {
    const { isPending, error, data } = useQuery({
        queryKey: ['github-releases'],
        queryFn: async () => {
            return await getLatestRelease();
        },
    })

    const translate = useTranslations('Translations');

    const platform = navigator.platform.toLowerCase();
    const displayPlatform = getPlatformName(platform);

    const [selectedPlatform, setSelectedPlatform] = useState(displayPlatform);

    let downloadsNode;

    switch (selectedPlatform.toLowerCase()) {
        case 'linux':
            downloadsNode = (
                <>
                </>
            );
            break;
        case 'macos':
            downloadsNode = (
                <>
                </>
            );
            break;
        case 'windows':
            downloadsNode = (
                <div className="w-full flex gap-8">
                    <div className="flex flex-col flex-1 items-center justify-center gap-4">
                        <p className="text-xl text-gray-400">
                            Windows 64bit
                        </p>
                        <Link
                            className="transition border-b-[1px] border-transparent hover:border-white"
                            target="_blank" 
                            href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                        >
                            Setup (.exe)
                        </Link>
                        <Link
                            className="transition border-b-[1px] border-transparent hover:border-white"
                            target="_blank" 
                            href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                        >
                            Portable (.zip)
                        </Link>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-4">
                    <p className="text-xl text-gray-400">
                            Windows 64bit
                        </p>
                        <Link
                            className="transition border-b-[1px] border-transparent hover:border-white"
                            target="_blank" 
                            href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                        >
                            Setup (.exe)
                        </Link>
                        <Link
                            className="transition border-b-[1px] border-transparent hover:border-white"
                            target="_blank" 
                            href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                        >
                            Portable (.zip)
                        </Link>
                    </div>
                </div>
            );
            break;
    }

    if (isPending) {
        return (
            <>Loading...</>
        );
    }

    if (error) {
        return (
            <>Error: {error.message}</>
        );
    }

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                {translate('downloads.title')}
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                {translate('downloads.description')}
            </p>
            <div className="flex gap-2 rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-2">
                {
                    DOWNLOADS_OPTIONS.map((option) => {
                        if (option === selectedPlatform) {
                            return (
                                <button
                                    onClick={() => setSelectedPlatform(option)}
                                    className="transition px-2 py-1 flex-1 bg-[#1D1A28] flex justify-center text-2xl items-center rounded-md" 
                                    key={option}
                                >
                                    {option}
                                </button>
                            );
                        }
                        
                        return (
                            <button 
                                onClick={() => setSelectedPlatform(option)}
                                className="transition flex justify-center items-center px-2 py-1 text-2xl flex-1" 
                                key={option}
                            >
                                {option}
                            </button>
                        );
                    })
                }
            </div>
            <div className="rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-2">
                <div className="flex flex-col gap-8 py-8 items-center">
                    <p className="text-3xl font-semibold text-white">
                        {translate('downloads.packages-for')}{' '}
                        <span className="text-[#cba6f7]">
                            {selectedPlatform}
                        </span>
                    </p>
                    {downloadsNode}
                </div>
            </div>
        </div>
    );
}