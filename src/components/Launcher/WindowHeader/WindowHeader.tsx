"use client";

import React from "react";
import getPlatformName from "@/utils/Helpers/getPlatformName";
import WinHeader from "@/components/Launcher/WindowHeader/WinHeader/WinHeader";
import MacHeader from "@/components/Launcher/WindowHeader/MacHeader/MacHeader";
import LinuxHeader from "@/components/Launcher/WindowHeader/LinuxHeader/LinuxHeader";

export default React.memo(function WindowHeader({
    platform,
}: {
    platform: ReturnType<typeof getPlatformName>;
}){
    switch (platform) {
        case "macOS":
            return (
                <MacHeader />
            );
        case "Linux":
            return (
                <LinuxHeader />
            );
        case "Windows":
            return (
                <WinHeader />
            );
        default:
            // If next.js hydration is still in the process
            // just show some blank header

            // 31.05.2025, f8c931e, update:
            // now user platform is fetched server-side using headers
            // so this shit should be obsolete, but i won't remove it
            // because if it works then don't touch it
            if (platform === null) {
                return (
                    <div className="w-full h-6 sm:h-8 bg-[#11111b]" />
                );
            }

            return (
                <WinHeader />
            );
    }
});
