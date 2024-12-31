"use client";

import { DOWNLOADS_OPTIONS } from "@/configs/constants";
import getPlatformName from "@/utils/getPlatformName";

export default function Downloads() {
    const platform = navigator.platform.toLowerCase();
    const displayPlatform = getPlatformName(platform);

    

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                Downloads
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                {('hero.description')}
            </p>
            <div className="rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-2">
                {
                    DOWNLOADS_OPTIONS.map((option) => {
                        return (
                            <div key={option}>
                                {option}
                            </div>
                        );
                    })
                }
            </div>
            <div className="rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-2">
2
            </div>
        </div>
    );
}