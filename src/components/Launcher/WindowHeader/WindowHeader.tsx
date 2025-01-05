import React, {useEffect, useState} from "react";
import getPlatformName from "@/utils/Helpers/getPlatformName";
import WinHeader from "@/components/Launcher/WindowHeader/WinHeader/WinHeader";
import MacHeader from "@/components/Launcher/WindowHeader/MacHeader/MacHeader";
import LinuxHeader from "@/components/Launcher/WindowHeader/LinuxHeader/LinuxHeader";

export default React.memo(function WindowHeader() {
    const [definedNavigator, setDefinedNavigator] = useState<Navigator | null>(null);

    const platform = definedNavigator?.platform.toLowerCase();
    const displayPlatform = getPlatformName(platform ?? '');

    useEffect(() => {
        setDefinedNavigator(navigator);
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
            // If Next.js hydration was successful, but navigator.platform
            // gives some random shit which is not handled by getPlatformName() util
            // then just show Windows title bar
            if (definedNavigator) {
                return (
                    <WinHeader />
                );
            }

            return (
                <div
                    className="w-full h-6 sm:h-8 bg-[#11111b]"
                />
            );
    }
});