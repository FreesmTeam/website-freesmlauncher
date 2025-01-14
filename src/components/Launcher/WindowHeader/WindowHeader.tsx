"use client";

import React, {useEffect, useState} from "react";
import getPlatformName from "@/utils/Helpers/getPlatformName";
import WinHeader from "@/components/Launcher/WindowHeader/WinHeader/WinHeader";
import MacHeader from "@/components/Launcher/WindowHeader/MacHeader/MacHeader";
import LinuxHeader from "@/components/Launcher/WindowHeader/LinuxHeader/LinuxHeader";
import { UAParser } from 'ua-parser-js';

export default React.memo(function WindowHeader() {
    const [platform, setPlatform] = useState<string | null>(null);
    const displayPlatform = getPlatformName(platform ?? "");

    useEffect(() => {
        setPlatform(UAParser().os.name?.toLowerCase() ?? "");
    }, []);

    switch (displayPlatform) {
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
        case "OS":
        default:
            // If next.js hydration is still in the process
            // show just some blank header
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