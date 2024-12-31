"use client";

import Launcher from "@/components/Launcher/Launcher";

export default function Hero() {
    const platform = navigator.platform.toLowerCase();
    let displayPlatform;

    switch (true) {
        case platform.includes('mac'):
            displayPlatform = 'macOS';
            break;
        case platform.includes('win'):
            displayPlatform = 'Windows';
            break
        case platform.includes('linux'):
            displayPlatform = 'Linux';
            break;
        default:
            displayPlatform = 'Windows'
            break;
    }

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                Download Freesm Launcher for{' '}
                <span className="text-[#cba6f7]">
                    {displayPlatform}
                </span>
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                Freesm Launcher is a custom launcher for Minecraft that allows you to play with offline account without any restrictions.
            </p>
            <div className="flex gap-2 justify-center">
                <button className="bg-[#cba6f7] py-2 px-4 rounded-md font-bold text-[18px] text-black">
                    Download Now
                </button>
                <button className="border-white border-[2px] bg-transparent py-2 px-4 rounded-md font-bold text-[18px] text-white">
                    Github
                </button>
            </div>
            <Launcher />
        </div>
    )
}